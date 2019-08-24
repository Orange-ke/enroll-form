<template>
  <div>
    <van-cell-group class="round-corner group">
      <div class="header" v-if="payResult.status !== null">
        <div class="header-type" v-if="payResult.status === 1">
          <svg t="1563761156525" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1117" width="48" height="48"><path d="M512 0C229.2224 0 0 229.2224 0 512s229.2224 512 512 512 512-229.2224 512-512S794.7776 0 512 0z m244.667733 422.0416l-263.68 263.662933c-6.656 6.673067-15.394133 10.001067-24.132266 10.001067s-17.4592-3.328-24.132267-10.001067l-143.240533-143.240533c-12.032-12.032-14.984533-31.402667-5.0688-45.2096a34.133333 34.133333 0 0 1 51.985066-4.386133l96.3072 96.3072a34.133333 34.133333 0 0 0 48.264534 0l216.746666-216.7296a34.133333 34.133333 0 0 1 51.985067 4.386133c9.949867 13.806933 6.980267 33.1776-5.034667 45.2096z" fill="#ffcc80" p-id="1118"></path></svg>
          <div class="title" style="padding: 0 0 0 0">
            报名成功
          </div>
        </div>
        <div class="header-type" v-else-if="payResult.status === 0">
          <svg t="1563761836137" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2216" width="48" height="48"><path d="M874.0352 149.9648c-199.953067-199.953067-524.1344-199.953067-724.0704 0-199.953067 199.953067-199.953067 524.1344 0 724.0704 199.953067 199.953067 524.1344 199.953067 724.0704 0 199.953067-199.953067 199.953067-524.117333 0-724.0704z m-194.56 481.245867c12.8512 12.8512 15.138133 33.9456 3.310933 47.752533a34.048 34.048 0 0 1-25.975466 11.9808 33.9968 33.9968 0 0 1-24.132267-10.001067l-96.546133-96.546133a34.133333 34.133333 0 0 0-48.264534 0L391.3216 680.96a34.0992 34.0992 0 0 1-50.107733-1.979733c-11.844267-13.806933-9.557333-34.901333 3.310933-47.752534l95.0784-95.0784a34.133333 34.133333 0 0 0 0-48.264533l-95.266133-95.266133c-12.014933-12.014933-14.933333-31.368533-5.000534-45.175467a34.133333 34.133333 0 0 1 51.985067-4.369067l96.546133 96.546134a34.133333 34.133333 0 0 0 48.264534 0l95.266133-95.266134c12.014933-12.014933 31.368533-14.933333 45.175467-5.000533a34.133333 34.133333 0 0 1 4.369066 51.985067l-96.546133 96.546133a34.133333 34.133333 0 0 0 0 48.264533l95.0784 95.061334z" fill="#ffcc80" p-id="2217"></path></svg>
          <div class="title" style="padding: 0 0 0 0">
            报名失败
          </div>
        </div>
      </div>
      <van-cell-group>
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
    </van-cell-group>
    <van-cell-group class="round-corner group" style="margin-top: 15px;">
      <div class="center">
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
        title="费用合计"
        :value="feeInfo.totalFee"
        title-class="info-title"
        value-class="total-price"
      />
      <van-cell
        class="top-margin"
        title="报名费用详情"
        :label="feeInfo.feeInfo"
      />
      <van-cell
        title="支付方式"
        title-class="info-title"
        value-class="info-title"
        :value="feeInfo.payType"
      />
      <van-cell
        title="支付时间"
        title-class="info-title"
        value-class="info-title flex-two"
        :value="feeInfo.time"
      />
      <van-cell
        title="订单号"
        title-class="info-title"
        value-class="info-title flex-two"
        :value="feeInfo.outTradeNum"
      />
    </van-cell-group>
    <div v-if="payResult.status === 0" style="text-align: right">
      <van-button class="submit-btn" type="danger" round @click="payAgain">重新支付</van-button>
    </div>
    <div v-if="payResult.status === 1" style="display: flex; justify-content: space-between" >
      <van-button class="submit-btn" plain type="default" round @click="seeDetail">查看报名信息</van-button>
      <van-button class="submit-btn" type="danger" round @click="goEnroll">继续报名</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, Toast } from 'vant'
import axios from 'axios'
export default {
  data () {
    return {
      payResult: {
        status: null,
        number: '',
        payTime: '',
        payType: '',
        payTotal: '',
        failReason: ''
      },
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
        tutorPhone: ''
      },
      feeInfo: {
        enrolledEvents: [
        ],
        totalFee: '',
        feeInfo: '个人节目为480元/单项, 加项260/项，团体节目（4人元以上）为300元/人，加项零售260/项目',
        payType: '微信支付',
        time: '',
        outTradeNum: ''
      }
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
    if (token) {
      //  查询info
      Toast.loading({
        mask: true,
        message: '查询报名信息中...',
        duration: 0
      })
      this.getInfo(token, function (res) {
        Toast.clear()
        console.log(res)
        if (res.order.pay_status !== 1) {
          return vm.$router.replace('/step3')
        }
        let card = [
          '',
          '身份证',
          '户口本',
          '护照',
          '港澳通行证'
        ]
        let info = res
        vm.payResult.status = info.order.pay_status
        vm.enrollInfo.name = info.order.real_name
        vm.enrollInfo.gender = info.order.sex + '' === '1' ? '男' : '女'
        vm.enrollInfo.zone = info.order.address_name
        vm.enrollInfo.group = info.order.group_name
        vm.enrollInfo.idType = card[info.order.card_type]
        vm.enrollInfo.idValue = info.order.card_number
        vm.enrollInfo.phone = vm.enrollInfo.phone = '+' + info.userInfo.mobile_code + ' ' + info.userInfo.mobile
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
          vm.feeInfo.time = info.order.pay_date
          vm.feeInfo.outTradeNum = info.order.out_trade_no
        }
      }, function (error) {
        Toast.clear()
        Toast.fail(error)
      })
    } else {
      vm.$router.replace('/step2')
    }
  },
  methods: {
    // 支付失败
    payAgain: function () {
      this.$router.replace('/step3')
    },
    // 跳转到报名详情页
    seeDetail: function () {
      this.$router.push('/info')
    },
    // 再次报名
    goEnroll: function () {
      window.sessionStorage.clear()
      this.$router.push('/step1')
    },
    // 获取报名订单信息
    getInfo: function (token, success, fail) {
      axios
        .get('api/MyOrder/info', {
          headers: {'token': token}
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success(res.data.data)
          } else {
            fail('获取报名信息失败！')
          }
        })
        .catch(error => {
          fail(error.response.data.msg)
          if (error.response.data.code === 401) {
            this.$router.replace('/step2')
          }
        })
    }
  },
  components: {
    'van-button': Button,
    'van-cell': Cell,
    'van-cell-group': CellGroup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    margin-left: 10px;
    display: inline-block;
  }
  .header-type {
    padding: 10px 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .van-cell__title {
    flex: 1
  }
  .van-cell__value {
    flex: 2
  }
  .event {
    border-radius: 15px;
    border: 1px solid #f5f5f5;
    width: 95%;
    margin: 10px auto 0;
    overflow: hidden;
    box-shadow: -1px 1px 5px #ddd;
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
