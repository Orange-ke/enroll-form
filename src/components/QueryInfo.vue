<template>
  <div class="form">
    <canvas class="canvas" ref="canvas"></canvas>
    <div class="content">
      <div>
        <img src="../assets/logo.png" alt="" width="100%">
      </div>
      <van-cell-group class="round-corner group golden">
        <div class="title align-center">
          {{ type === '1' ?  '去报名' :  '查询信息' }}
        </div>
        <van-field
          :border="false"
          v-model="phone"
          required
          input-align="left"
          placeholder="请输入手机号"
          style="line-height: 50px;"
        >
          <div slot="label" class="phone-label">
            <span>联系电话</span>
            <span class="two" @click="selectCode"> <span>{{ mobileCode }}</span> <van-icon name="arrow-down"/></span>
          </div>
        </van-field>
        <van-action-sheet
          v-model="showCode"
          :actions="codeActions"
          @select="onCodeSelect"
        />
        <!-- 短信验证码 -->
        <van-field
          v-model="sms"
          center
          clearable
          required
          label="短信验证码"
          placeholder="请输入验证码"
        >
          <van-button :loading="loading" slot="button" plain size="small" type="default" class="smsButton" @click="sendSmsCode">发送验证码
          </van-button>
        </van-field>
      </van-cell-group>
      <van-button
        v-if="type === '2'"
        round
        size="large"
        type="default"
        class="submit-btn one"
        @click="onSubmit"
      >
        查询
      </van-button>
      <van-button
        v-if="type === '1'"
        round
        size="large"
        type="default"
        class="submit-btn one"
        @click="toEnroll"
      >
        登录
      </van-button>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Toast, ActionSheet, Icon } from 'vant'
import { drawbackground, checkPhone } from '../util'
import axios from 'axios'

export default {
  data () {
    return {
      type: '1',
      phone: '',
      loading: false,
      sms: '',
      // 学生手机区号配置
      showCode: false,
      zone: 0,
      mobileCode: '+86',
      codeActions: [
        {name: '+86', value: 0, id: '86'},
        {name: '+853', value: 1, id: '853'},
        {name: '+852', value: 2, id: '852'},
        {name: '+856', value: 3, id: '856'}
      ]
    }
  },
  mounted: function () {
    drawbackground(this)
    let type = this.$route.params.type
    if (type) {
      this.type = type
    }
  },
  methods: {
    selectCode: function () {
      this.showCode = true
    },
    onCodeSelect: function (item) {
      console.log(item)
      this.mobileCode = item.name
      this.zone = item.value
      this.showCode = false
    },
    validation: function () {
      let sms = this.sms.trim()
      let phone = this.phone.trim()
      let mobileCode = this.mobileCode
      if (phone === '') {
        Toast.fail('请输入手机号')
        return false
      }
      if (!checkPhone(phone)) {
        Toast.fail('请输入正确的手机号')
        return false
      }
      if (sms.length !== 6) {
        Toast.fail('验证码有误！')
        return false
      }
      return {
        mobile_code: mobileCode,
        mobile: phone,
        verify_code: sms
      }
    },
    toEnroll: function () {
      console.log('toEnroll')
      if (this.validation()) {
        let params = this.validation()
        console.log(params)
        let vm = this
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        })
        this.login(params, function (res) {
          Toast.clear()
          console.log(res)
          axios.defaults.headers = {
            'token': res.token
          }
          window.sessionStorage.setItem('phoneConfig', JSON.stringify(params))
          window.sessionStorage.setItem('token', res.token)
          vm.$router.push('/step1')
        }, function (error) {
          Toast.clear()
          Toast.fail(error)
        })
      }
    },
    onSubmit: function () {
      console.log('submit')
      if (this.validation()) {
        let params = this.validation()
        console.log(params)
        let vm = this
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        })
        this.login(params, function (res) {
          Toast.clear()
          console.log(res)
          axios.defaults.headers = {
            'token': res.token
          }
          window.sessionStorage.setItem('token', res.token)
          vm.$router.push('/info')
        }, function (error) {
          Toast.clear()
          Toast.fail(error)
        })
      }
    },
    login: function (params, success, fail) {
      axios
        .post('api/Login/mobile', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success(res.data.data)
          } else {
            fail('身份校验失败，请重试！')
          }
        })
        .catch(error => {
          console.log(error)
          fail(error.response.data.msg)
        })
    },
    sendSmsCode: function (e) {
      console.log(e.target)
      let phone = this.phone.trim()
      if (!checkPhone(phone) || phone === '') {
        Toast.fail('您输入的联系方式有误！')
        return false
      }
      e.target.setAttribute('disabled', true)
      // 调用发验证码接口
      this.sendCode({mobile: phone, mobileCode: this.mobileCode}, function () {
        let countDown = 60
        let intervalHandler = setInterval(function () {
          countDown--
          e.target.innerText = countDown + '秒后重试'
          if (countDown < 1) {
            e.target.removeAttribute('disabled')
            e.target.innerText = '发送验证码'
            clearInterval(intervalHandler)
          }
        }, 1000)
      }, function (error) {
        Toast.fail(error)
        e.target.removeAttribute('disabled')
      })
    },
    sendCode: function (params, success, fail) {
      this.loading = true
      axios
        .post('api/Sms/index', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.loading = false
            success()
          } else {
            this.loading = false
            fail('发送失败请稍后重试！')
          }
        })
        .catch(error => {
          this.loading = false
          fail(error.response.data.msg)
        })
    }
  },
  components: {
    'van-button': Button,
    'van-cell-group': CellGroup,
    'van-field': Field,
    'van-action-sheet': ActionSheet,
    'van-icon': Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .phone-label {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 150px;
  }

  .smsButton {
    border: 1px solid saddlebrown;
    border-radius: 10px;
    color: saddlebrown;
  }

  .smsButton[disabled='true'] {
    border: 1px solid #9e9e9e;
    border-radius: 10px;
    color: #9e9e9e;
  }

  .two {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .golden, .golden .van-cell {
    background: #ffcc80;
  }
  .golden button {
    background: rgba(255, 255, 255, 0.6);
  }
</style>
