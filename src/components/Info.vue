<template>
  <div class="form">
    <van-steps :active="active" active-color="#ffcc80">
      <van-step>上传证件</van-step>
      <van-step>填写信息</van-step>
      <van-step>支付缴费</van-step>
      <van-step>{{ result }}</van-step>
    </van-steps>
    <van-cell-group class="round-corner group">
      <div class="title align-center">
        {{ title }}
      </div>
      <!-- 报名姓名 -->
      <!-- 以下资料可修改 -->
      <!-- -------------------------------------- -->
      <van-field
        v-model="enrollInfo.name"
        :readonly="!editable"
        input-align="right"
        label="参赛选手姓名"
        ref="focus"
      />
      <van-cell
        title="参赛选手性别"
      >
        <div slot="default">
          <span v-if="!editable">{{ enrollInfo.gender }}</span>
          <van-radio-group v-else v-model="radio" class="clear">
            <van-radio name="1" checked-color="#ffcc80" class="radio-float">
              男
              <svg slot="icon" slot-scope="props" v-if="!props.checked" t="1565680133369" viewBox="0 0 1024 1024"
                   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2332" width="20" height="20">
                <path
                  d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.1072-50.0736 261.7344-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.7344 0 653.1072 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.8528 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184s240.4352-45.9776 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.4352-137.8304-332.288S641.6384 41.8816 512 41.8816z"
                  p-id="2333" fill="#707070"></path>
              </svg>
              <svg slot="icon" slot-scope="props" v-if="props.checked" t="1565680314346" viewBox="0 0 1024 1024"
                   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2647" width="20" height="20">
                <path
                  d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"
                  p-id="2648"></path>
              </svg>
            </van-radio>
            <van-radio name="2" checked-color="#ffcc80" class="radio-float">
              女
              <svg slot="icon" slot-scope="props" v-if="!props.checked" t="1565680133369" viewBox="0 0 1024 1024"
                   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2332" width="20" height="20">
                <path
                  d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.1072-50.0736 261.7344-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.7344 0 653.1072 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.8528 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184s240.4352-45.9776 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.4352-137.8304-332.288S641.6384 41.8816 512 41.8816z"
                  p-id="2333" fill="#707070"></path>
              </svg>
              <svg slot="icon" slot-scope="props" v-if="props.checked" t="1565680314346" viewBox="0 0 1024 1024"
                   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2647" width="20" height="20">
                <path
                  d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"
                  p-id="2648"></path>
              </svg>
            </van-radio>
          </van-radio-group>
        </div>
      </van-cell>
      <!-- -------------------------------------- -->
      <van-cell
        title="参赛地区"
        :value="enrollInfo.zone"
        :value-class="editable ? 'editable' : ''"
      />
      <van-cell
        title="年龄组别"
        :value="enrollInfo.group"
        :value-class="editable ? 'editable' : ''"
      />
      <van-cell
        title="证件类型"
        :value="enrollInfo.idType"
        :value-class="editable ? 'editable' : ''"
      />
      <van-cell
        title="证件号码"
        :value="enrollInfo.idValue"
        :value-class="editable ? 'editable' : ''"
      />
      <van-cell
        title="联系电话"
        :value="enrollInfo.phone"
        :value-class="editable ? 'editable' : ''"
      />
      <!-- 以下资料可修改 -->
      <!-- -------------------------------------- -->
      <van-field
        v-model="enrollInfo.organization"
        :readonly="!editable"
        input-align="right"
        label="教育机构/工作室"
      />
      <van-field
        v-model="enrollInfo.tutor"
        :readonly="!editable"
        input-align="right"
        label="指导老师"
      />
      <van-cell
        v-if="!editable"
        title="指导老师电话"
        :value="enrollInfo.tutorPhone"
      />
      <!-- 老师联系电话-----可编辑状态 -->
      <van-field
        v-if="editable"
        v-model="enrollInfo.tutorPhone"
        input-align="right"
        placeholder="请输入导师手机号"
        style="line-height: 50px;"
        label-width="150px"
      >
        <div slot="label" class="phone-label">
          <span>导师联系电话</span>
          <span class="flex-two" @click="selectTeacherCode"> <span>{{ teacherMobileCode }}</span> <van-icon name="arrow-down"/></span>
        </div>
      </van-field>
      <van-action-sheet
        v-model="showTeacherCode"
        :actions="teacherCodeActions"
        @select="onTeacherCodeSelect"
      />
      <!-- -------------------------------------- -->
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
          :value-class="editable ? 'editable' : ''"
        />
        <van-cell
          title="参赛形式"
          :value="item.form"
          :value-class="editable ? 'editable' : ''"
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
        :value-class="editable ? 'editable' : ''"
      />
      <van-cell
        title="支付方式"
        title-class="info-title"
        :value-class="editable ? 'info-title editable' : 'info-title'"
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
<!--    <van-cell-group class="round-corner group">-->
<!--      <div class="title align-center">-->
<!--        比赛安排-->
<!--      </div>-->
<!--      <van-cell-group class="event" v-for="(item, index) in eventArrangement.events" :key="index">-->
<!--        <van-cell-->
<!--          title="参赛项目"-->
<!--          :value="item.eventName"-->
<!--        />-->
<!--        <van-cell-->
<!--          title="参赛形式"-->
<!--          :value="item.form"-->
<!--        />-->
<!--        <van-cell-->
<!--          title="比赛时间"-->
<!--          :value="item.time"-->
<!--        />-->
<!--        <van-cell-->
<!--          title="比赛场地"-->
<!--          :value="item.location"-->
<!--        />-->
<!--      </van-cell-group>-->
<!--    </van-cell-group>-->
    <div style="text-align: right" class="group">
      <van-button round class="brown-btn" @click="goEntry">返回入口</van-button>
      <van-button v-if="!editable" round class="brown-btn" @click="changeEditableStatus">修改信息</van-button>
      <van-button v-if="editable" round class="brown-btn" @click="quitChange">放弃修改</van-button>
      <van-button v-if="editable" round class="brown-btn" @click="saveChange">保存修改信息</van-button>
    </div>
  </div>
</template>

<script>
import { Steps, Step, CellGroup, Cell, Field, Button, Toast, RadioGroup, Radio, Dialog, Icon, ActionSheet } from 'vant'
import { checkPhone } from '../util'
import axios from 'axios'
export default {
  data () {
    return {
      active: 3,
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
        mobileCode: '',
        orderId: ''
      },
      feeInfo: {
        enrolledEvents: [
        ],
        totalFee: '',
        feeInfo: '个人节目为480元/单项, 加项260/项，团体节目（4人元以上）为300元/人，加项零售260/项目',
        payType: '微信支付'
      },
      editable: false,
      gender: {
        '1': {id: 2, value: '女'},
        '2': {id: 1, value: '男'}
      },
      radio: '2',
      // 老师手机区号配置
      showTeacherCode: false,
      teacherZone: 0,
      teacherMobileCode: '+86',
      teacherCodeActions: [
        {name: '+86', value: 0, id: '86'},
        {name: '+853', value: 1, id: '853'},
        {name: '+852', value: 2, id: '852'},
        {name: '+856', value: 3, id: '856'}
      ],
      result: '',
      title: ''
      // eventArrangement: {
      //   events: [
      //     {
      //       eventName: '舞蹈拉丁舞',
      //       form: '个人',
      //       time: '2019年12月25日',
      //       location: '澳门冒险王国'
      //     },
      //     {
      //       eventName: '舞蹈拉丁舞',
      //       form: '个人',
      //       time: '2019年12月25日',
      //       location: '澳门冒险王国'
      //     }
      //   ]
      // }
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    selectTeacherCode: function () {
      this.showTeacherCode = true
    },
    onTeacherCodeSelect: function (item) {
      console.log(item)
      this.teacherMobileCode = item.name
      this.teacherZone = item.value
      this.showTeacherCode = false
    },
    queryInfo: function (token, success, fail) {
      axios
        .get('api/MyOrder/info', {
          headers: {'token': token}
        })
        .then(res => {
          if (res.data.code === 200) {
            success(res.data.data)
          } else {
            fail('查询失败，请重试！')
          }
        })
        .catch(error => {
          console.log(error)
          fail(error.response.data.msg)
          if (error.response.data.code === 401) {
            this.$router.replace('/queryInfo')
          }
        })
    },
    changeEditableStatus: function () {
      Dialog.confirm({
        title: '注意',
        message: '仅有非灰色的信息才能修改！'
      }).then(() => {
        // on confirm
        this.editable = true
        this.$refs.focus.focus()
      }).catch(() => {
        // on cancel
      })
    },
    validation: function () {
      let orderId = this.enrollInfo.orderId
      let name = this.enrollInfo.name.trim()
      let gender = this.radio
      let organization = this.enrollInfo.organization.trim()
      let tutor = this.enrollInfo.tutor.trim()
      let tutorPhone = this.enrollInfo.tutorPhone.trim()
      let mobileCode = this.teacherMobileCode
      if (name === '') {
        Toast.fail('姓名不能为空！')
        return false
      }
      if (organization === '') {
        Toast.fail('教育机构或工作室不能为空！')
        return false
      }
      if (tutor === '') {
        Toast.fail('导师姓名不能为空！')
        return false
      }
      if (tutorPhone === '') {
        Toast.fail('导师联系方式不能为空！')
        return false
      }
      if (!checkPhone(tutorPhone)) {
        Toast.fail('导师联系方式错误！')
        return false
      }
      return {
        'order_id': orderId,
        'real_name': name,
        'sex': gender + '',
        'teacher_organization': organization,
        'teacher_mobile_code': mobileCode,
        'teacher_mobile': tutorPhone,
        'teacher': tutor
      }
    },
    saveChange: function () {
      let vm = this
      if (this.validation()) {
        let params = this.validation()
        Toast.loading({
          mask: true,
          message: '加载中...',
          duration: 0
        })
        this.toChange(params, function (res) {
          Toast.clear()
          console.log(res)
          vm.editable = false
          vm.init()
          Toast.success('修改成功')
        }, function (error) {
          Toast.clear()
          Toast.fail(error)
        })
      }
    },
    quitChange: function () {
      this.editable = false
    },
    toChange: function (params, success, fail) {
      axios
        .post('api/MyOrder/edit', params, {
          headers: { 'token': window.sessionStorage.getItem('token') }
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success()
          } else {
            fail('修改失败，请重试！')
          }
        })
        .catch(error => {
          console.log(error)
          fail(error.response.data.msg)
          if (error.response.data.code === 401) {
            this.$router.replace('/queryInfo')
          }
        })
    },
    goEntry: function () {
      window.sessionStorage.clear()
      this.$router.push({name: 'Entry'})
    },
    init: function () {
      let vm = this
      let token = window.sessionStorage.getItem('token')
      if (token) {
        this.queryInfo(token, function (info) {
          console.log(info)
          if (!info.order) {
            return vm.$router.replace('/step1')
          }
          switch (info.order.pay_status) {
            case 0:
              vm.result = '未支付'
              vm.title = '您还未支付，请回到报名填写页面'
              break
            case 1:
              vm.result = '报名成功'
              vm.title = '报名信息'
              break
            case 2:
              vm.result = '支付失败'
              vm.title = '支付失败，请查看微信支付详情'
              break
            case 3:
              vm.result = '待退款'
              vm.title = '您的退款申请正在审核中...'
              break
            case 4:
              vm.result = '已退款'
              vm.title = '您的退款申请已完成审核'
              break
          }
          if (info.order.pay_status === 0) {
            return vm.$router.replace('/step1')
          }
          let card = [
            '',
            '身份证',
            '户口本',
            '护照',
            '港澳通行证'
          ]
          let mobileCode = {
            '86': 0,
            '853': 1,
            '852': 2,
            '856': 3
          }
          // 获取到查询信息并赋值
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
          vm.enrollInfo.mobileCode = info.order.mobile_code
          vm.radio = info.order.sex + ''
          vm.teacherZone = mobileCode[info.order.mobile_code]
          vm.teacherMobileCode = vm.teacherCodeActions[vm.teacherZone].name
          vm.enrollInfo.orderId = info.order.order_id
          if (info.orderItem.length > 0) {
            vm.feeInfo.enrolledEvents = []
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
          Toast.fail(error)
        })
      } else {
        vm.$router.replace('/queryInfo')
      }
    }
  },
  components: {
    'van-steps': Steps,
    'van-step': Step,
    'van-cell-group': CellGroup,
    'van-cell': Cell,
    'van-button': Button,
    'van-field': Field,
    'van-radio': Radio,
    'van-radio-group': RadioGroup,
    'van-icon': Icon,
    'van-action-sheet': ActionSheet
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .radio-float {
    float: right;
    text-align: right;
    width: 60px;
    justify-content: space-evenly;
  }
  .editable {
    color: #9e9e9e;
  }
</style>
