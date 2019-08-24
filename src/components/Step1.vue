<template>
  <div class="step1">
    <van-cell-group class="round-corner group">
      <div class="title align-center">
        上传证件信息
      </div>
      <van-cell
        title="证件类型"
        :value="idType[index].value"
        isLink
        @click="selectIdType"
      >
      </van-cell>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />
      <van-field
        input-align="right"
        v-model="idValue"
        clearable
        label="证件号码"
        placeholder="请输入证件号码"
      />
      <van-cell
        title="请上传证件照片(照片需清晰)"
      >
        <div slot="label">
          <van-uploader
            style="margin-right: 15px;"
            :before-read="beforeRead"
            :after-read="afterRead"
            v-model="fileList"
            multiple
            :upload-text="idType[index].config.value[idType[index].config.num > 1 ? (fileList.length > 1 ? 1 : fileList.length) : 0].hint"
            :max-count="idType[index].config.num > 1 ? 2 : 1"
          />
        </div>
      </van-cell>
    </van-cell-group>
    <van-button
      round
      size="large"
      type="default"
      class="submit-btn one"
      :loading="loading"
      @click="onSubmit"
    >
      下一步
    </van-button>
  </div>
</template>

<script>
import { Steps, Step, CellGroup, Field, Cell, Icon, Uploader, Button, ActionSheet, Toast } from 'vant'
import { checkId } from '../util'
import axios from 'axios'
export default {
  data () {
    return {
      // 是否是第一次上传
      isFirst: true,
      // 证件号码
      idValue: '',
      // 证件类型
      index: 1,
      // 证件类型配置
      idType: [
        {},
        { sign: 1, value: '身份证', config: { num: 2, value: [{hint: '正面'}, {hint: '反面'}] } },
        { sign: 2, value: '户口本', config: { num: 1, value: [{hint: '所在页照片'}] } },
        { sign: 3, value: '护照', config: { num: 1, value: [{hint: '所在页照片'}] } },
        { sign: 4, value: '港澳通行证', config: { num: 2, value: [{hint: '正面'}, {hint: '反面'}] } }
      ],
      // 已上传的图片
      fileList: [],
      // 证件类型选择 popup
      show: false,
      actions: [
        { name: '身份证', id: 1 },
        { name: '户口本', id: 2 },
        { name: '护照', id: 3 },
        { name: '港澳通行证', id: 4 }
      ],
      loading: false
    }
  },
  created: function () {
    let token = window.sessionStorage.getItem('token')
    if (!token) {
      this.$router.replace('/')
    }
  },
  mounted: function () {
    let vm = this
    let token = window.sessionStorage.getItem('token')
    axios.defaults.headers = {
      'token': token
    }
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration: 0
    })
    this.init(token, function (res) {
      Toast.clear()
      // 判断是否已支付订单
      if (res.order_id) {
        vm.$router.replace('/info')
        return false
      } else {
        // 证件号码
        vm.idValue = res.card_number
        // 证件类型
        vm.index = res.card_type
        if (res.card_img.length > 0) {
          vm.isFirst = true
          res.card_img.map(item => {
            vm.fileList.push({
              url: item.thumb
            })
          })
        } else {
          vm.isFirst = false
          vm.fileList = []
        }
      }
    }, function (error) {
      Toast.fail(error)
    })
  },
  methods: {
    selectIdType: function () {
      console.log('selectIdType')
      this.show = true
    },
    beforeRead: function (file) {
      console.log(file)
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        Toast.fail('请上传 jpg 或 png 格式图片')
        return false
      }
      if (file.size > 1024 * 1024 * 3) {
        Toast.fail('请上传小于3M大小的图片')
        return false
      }
      return true
    },
    afterRead: function (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      console.log(this.fileList)
    },
    onSelect: function (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      console.log(item)
      if (this.index !== item.id) {
        this.fileList = []
        this.index = item.id
      }
      this.show = false
    },
    validation: function () {
      let params = {}
      params.idType = this.idType[this.index]
      params.idValue = this.idValue.trim()
      params.idFile = this.fileList
      if (params.idValue === '') {
        Toast.fail('证件号码不能为空！')
        return false
      }
      if (!checkId(params.idValue) && this.index === 1) {
        Toast.fail('证件号码错误！')
        return false
      }
      // -------------
      // 校验号码 身份证
      // -------------
      if (params.idFile.length === 0) {
        Toast.fail('请上传证件照片！')
        return false
      }
      if (params.idFile.length === 1 && params.idType.config.num > 1) {
        Toast.fail('请上传证件反面照片！')
        return false
      }
      return params
    },
    onSubmit: function () {
      if (this.validation()) {
        console.log(this.validation())
        let vm = this
        let validatedData = this.validation()
        let param = new FormData()
        param.append('card_type', validatedData.idType.sign)
        param.append('card_number', validatedData.idValue)
        validatedData.idFile.map((item, index) => {
          if (item.url) {
          } else if (item.file) {
            param.append('file' + (index + 1), item.file)
          }
        })
        let config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        Toast.loading({
          mask: true,
          message: '上传中...',
          duration: 0
        })
        this.uploadCard(param, config, function () {
          console.log(vm.fileList)
          Toast.clear()
          window.sessionStorage.setItem('step1Data', 'true')
          vm.$router.push({name: 'Step2'})
        }, function (error) {
          Toast.clear()
          Toast.fail(error)
        })
      }
    },
    uploadCard: function (params, config, success, fail) {
      axios
        .post('api/MatchOrder/uploadCard', params, config)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success(res.data.data)
          } else {
            fail('上传失败，请重试！')
          }
        })
        .catch(error => {
          console.log(error.response.data.msg)
          fail(error.response.data.msg)
        })
    },
    init: function (token, success, fail) {
      axios
        .get('api/MatchOrder/cardInfo', {
          headers: {'token': token}
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success(res.data.data)
          } else {
            fail()
          }
        })
        .catch(error => {
          Toast.clear()
          console.log(error)
          fail(error.response.data.msg)
        })
    }
  },
  components: {
    'van-steps': Steps,
    'van-step': Step,
    'van-cell': Cell,
    'van-cell-group': CellGroup,
    'van-field': Field,
    'van-icon': Icon,
    'van-uploader': Uploader,
    'van-button': Button,
    'van-action-sheet': ActionSheet
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
