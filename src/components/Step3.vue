<template>
  <div class="pay">
    <van-cell-group class="round-corner group">
      <div class="title align-center">
        缴费
      </div>
      <!-- 报名姓名 -->
      <van-cell
        title="参赛选手姓名"
        :value="enrollInfo.name"
      />
      <van-cell
        title="参赛选手性别"
        :value="enrollInfo.gender"
      />
      <van-cell
        title="参赛地区"
        :value="enrollInfo.zone"
      />
      <van-cell
        title="年龄组别"
        :value="enrollInfo.group"
      />
      <van-cell
        title="证件类型"
        :value="enrollInfo.idType"
      />
      <van-cell
        title="证件号码"
        :value="enrollInfo.idValue"
      />
      <van-cell
        title="联系电话"
        :value="enrollInfo.phone"
      />
      <van-cell
        title="教育机构/工作室"
        :value="enrollInfo.organization"
      />
      <van-cell
        title="指导老师"
        :value="enrollInfo.tutor"
      />
      <van-cell
        title="指导老师电话"
        :value="enrollInfo.tutorPhone"
      />
    </van-cell-group>
    <van-cell-group class="round-corner group">
      <div class="title align-center">
        项目收费
      </div>
      <van-cell-group class="event" v-for="(item, index) in feeInfo.enrolledEvents" :key="index">
        <van-cell
          :title="item.type"
        />
        <van-cell
          title="参赛名称"
          :value="item.event"
        />
        <van-cell
          title="参赛形式"
          :value="item.form"
        />
        <van-cell
          title="价钱"
          :value="item.price"
          value-class="item-price"
        />
      </van-cell-group>
      <van-cell
        class="top-margin"
        title="费用合计"
        :value="feeInfo.totalFee"
        title-class="info-title"
        value-class="total-price"
      />
      <van-cell
        title="报名费用详情"
        :label="feeInfo.feeInfo"
      />
      <van-cell
        title="支付方式"
        title-class="info-title"
      />
      <van-cell center>
        <svg t="1565774382529" slot="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2114" width="48" height="48"><path d="M236.24 323.769c0 24.005 19.32 43.325 43.325 43.325s43.326-19.32 43.326-43.325c0-24.005-19.321-43.325-43.326-43.325-24.004 0-43.325 19.32-43.325 43.325z m336.064 223.067c0 18.735 15.223 33.958 33.958 33.958s33.958-15.223 33.958-33.958-15.223-33.958-33.958-33.958-33.958 15.223-33.958 33.958zM456.38 323.769c0 24.005 19.32 43.325 43.325 43.325 24.005 0 43.325-19.32 43.325-43.325 0-24.005-19.32-43.325-43.325-43.325-24.005 0-43.325 19.32-43.325 43.325z" p-id="2115" fill="#388E3C"></path><path d="M858.017 0H165.983C74.648 0 0.293 74.356 0.293 166.276v690.863c0 91.92 74.355 166.276 165.69 166.276h692.034c91.335 0 165.69-74.356 165.69-166.276V166.276C1023.707 74.94 949.352 0 858.017 0zM384.366 686.18c-38.642 0-69.672-8.197-108.899-15.808L167.154 724.82l31.03-93.09C120.316 577.28 74.063 507.022 74.063 422.128c0-147.54 139.929-264.05 310.303-264.05 152.81 0 286.298 93.09 313.23 217.798a255.341 255.341 0 0 0-29.859-1.757c-147.54 0-264.05 110.07-264.05 245.315 0 22.834 3.513 44.496 9.367 64.988-9.367 1.171-18.735 1.757-28.688 1.757z m457.843 108.313l23.42 77.283-84.895-46.838c-31.03 7.61-62.06 15.808-93.09 15.808-147.541 0-264.051-100.703-264.051-225.41 0-124.12 116.51-225.408 264.05-225.408 139.344 0 263.465 101.288 263.465 225.409-0.585 70.843-46.838 132.903-108.899 179.156z" p-id="2116" fill="#388E3C"></path><path d="M741.507 546.836c0 18.735 15.223 33.958 33.958 33.958s33.958-15.223 33.958-33.958-15.223-33.958-33.958-33.958c-19.32 0-33.958 15.223-33.958 33.958z" p-id="2117" fill="#388E3C"></path></svg>
        <div slot="title">
          <span style="margin-left: 10px;">微信支付</span>
        </div>
        <van-radio-group v-model="radio" slot="right-icon">
          <van-radio name="1" checked-color="#ffcc80" />
        </van-radio-group>
      </van-cell>
      <van-cell
        title="注意事项"
      >
        <div slot="label">
          <span>参赛报名费用: 报名费已经缴纳，不得退换及转让他人；报名信息不全及须加信息的报名视为无效，比赛组委会回味选手材料保密，并有权要求选手补充材料。</span><br />
          <van-checkbox v-model="checked" checked-color="#ffcc80" style="margin-top: 10px;">阅读并已知晓</van-checkbox>
        </div>
      </van-cell>
    </van-cell-group>
    <div style="display: flex; justify-content: space-between">
      <van-button
        round
        type="default"
        class="submit-btn"
        @click="goBack"
      >
        上一步
      </van-button>
      <van-button
        round
        type="default"
        class="submit-btn"
        @click="onSubmit"
      >
        微信支付
      </van-button>
    </div>
  </div>
</template>

<script>
import { Button, Toast, Cell, CellGroup, RadioGroup, Radio, Checkbox } from 'vant'
import { isWeiXin, onBridgeReady, wxPay, h5Pay } from '../util'
import axios from 'axios'

export default {
  data () {
    return {
      enrollInfo: {
        name: '',
        gender: '',
        zone: '',
        group: '',
        idType: '',
        idValue: '',
        phone: '',
        organization: '',
        tutor: '',
        tutorPhone: '',
        orderId: ''
      },
      feeInfo: {
        enrolledEvents: [
        ],
        totalFee: '',
        feeInfo: '个人节目为480元/单项，加项另收260/项，团体节目（4人以上）为300元/人，加项另收260/项目。',
        payType: '微信支付'
      },
      radio: '1',
      checked: false
    }
  },
  created: function () {
    let token = window.sessionStorage.getItem('token')
    if (!token) {
      this.$router.replace('/')
    } else if (!window.sessionStorage.getItem('step2Data')) {
      this.$router.replace('/step2')
    } else if (!window.sessionStorage.getItem('step1Data')) {
      this.$router.replace('/step1')
    }
  },
  mounted: function () {
    let token = window.sessionStorage.getItem('token')
    axios.defaults.headers = {
      'token': token
    }
    let vm = this
    Toast.loading({
      mask: true,
      message: '加载中...',
      duration: 0
    })
    this.init(token, function (info) {
      if (info.order.pay_status === 1) {
        return vm.$router.replace('/info')
      }
      let card = [
        '',
        '身份证',
        '户口本',
        '护照',
        '港澳通行证'
      ]
      console.log(info)
      vm.enrollInfo.name = info.order.real_name
      vm.enrollInfo.gender = info.order.sex + '' === '1' ? '男' : '女'
      vm.enrollInfo.zone = info.order.address_name
      vm.enrollInfo.group = info.order.group_name
      vm.enrollInfo.idType = card[info.order.card_type]
      vm.enrollInfo.idValue = info.order.card_number
      vm.enrollInfo.phone = '+' + info.userInfo.mobile_code + ' ' + info.userInfo.mobile
      vm.enrollInfo.organization = info.order.teacher_organization
      vm.enrollInfo.tutor = info.order.teacher
      vm.enrollInfo.tutorPhone = info.order.teacher_mobile
      vm.enrollInfo.orderId = info.order.order_id
      if (info.orderItem.length > 0) {
        info.orderItem.map(item => {
          vm.feeInfo.enrolledEvents.push({
            type: item.sort === 1 ? '主项' : '附加项',
            event: item.project_name,
            form: item.form_name,
            price: item.charge + ' ' + item.settle_currency
          })
        })
        vm.feeInfo.totalFee = info.order.total_amount + ' ' + info.order.settle_currency
      }
    }, function (error) {
      Toast.fail(error)
    })
  },
  methods: {
    goBack: function () {
      this.$router.replace('/step2')
    },
    onSubmit: function () {
      console.log('submit')
      if (!this.checked) {
        Toast.fail('请阅读并确认已查看注意事项')
        return false
      }
      let isWX = isWeiXin()
      const params = isWX ? {
        'openId': window.sessionStorage.getItem('openId'),
        'order_id': this.enrollInfo.orderId,
        'payType': 'wechat',
        'payScene': 'js'
      } : {
        'order_id': this.enrollInfo.orderId,
        'payType': 'wechat',
        'payScene': 'h5'
      }
      if (isWX) {
        alert('wx')
        wxPay(params, onBridgeReady)
      } else {
        h5Pay(params)
      }
    },
    init: function (token, success, fail) {
      axios
        .get('api/MyOrder/info', {
          headers: {'token': token}
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            Toast.clear()
            success(res.data.data)
          } else {
            Toast.clear()
            fail('获取信息失败， 请重试')
          }
        })
        .catch(error => {
          console.log(error)
          Toast.clear()
          fail(error.response.data.msg)
        })
    }
  },
  components: {
    'van-button': Button,
    'van-cell': Cell,
    'van-cell-group': CellGroup,
    'van-radio-group': RadioGroup,
    'van-radio': Radio,
    'van-checkbox': Checkbox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon {
    border-radius: 128px;
    overflow: hidden;
    background: #f5f5f5;
  }
  .event {
    border-radius: 15px;
    border: 1px solid #f5f5f5;
    width: 95%;
    margin: 10px auto 0;
    overflow: hidden;
    box-shadow: -1px 1px 5px #ddd;
  }
  .group:not(first-child) {
    margin-top: 15px;
  }
  .info-title {
    font-size: 15px;
    font-weight: 600;
    color: saddlebrown;
  }
  .item-price {
    color: #F44336;
    font-weight: bold;
  }
  .total-price {
    font-size: 16px;
    font-weight: 600;
    color: #F44336;
  }
</style>
