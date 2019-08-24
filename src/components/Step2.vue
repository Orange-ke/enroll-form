<template>
  <div class="step1">
    <van-cell-group class="round-corner group">
      <div class="title align-center">
        填报报名信息
      </div>
      <!-- 报名姓名 -->
      <van-field
        input-align="right"
        v-model="name"
        clearable
        required
        label="参赛选手姓名"
        placeholder="请输入您的姓名"
      />
      <!-- 性别 -->
      <van-cell
        title="参赛选手性别"
        required
      >
        <div slot="default">
          <van-radio-group v-model="radio" class="clear">
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
      <!-- 参赛地区选择 -->
      <van-cell
        title="参赛地区"
        :value="area[areaIndex] ? area[areaIndex].value : ''"
        required
        isLink
        @click="selectArea"
      >
      </van-cell>
      <van-action-sheet
        v-model="areaShow"
        :actions="areaActions"
        @select="onAreaSelect"
      />
      <!-- 参赛年龄组别选择 -->
      <van-cell
        title="年龄组别"
        required
        :value="age[ageIndex] ? age[ageIndex].value : ''"
        isLink
        @click="selectAge"
      >
      </van-cell>
      <van-action-sheet
        v-model="ageShow"
        :actions="ageActions"
        @select="onAgeSelect"
      />
      <!-- 参赛项目 -->
      <van-field
        input-align="right"
        clearable
        required
        readonly
        label="参赛项目"
        placeholder="每人只能参加三项"
      />
      <div class="events-container">
        <van-sports-event
          v-for="(item, index_) in listInfo"
          :key="index_"
          :eventConfig="item"
          :index="index_"
          :selectEvent="selectEvent"
          :onEventSelect="onEventSelect"
          :selectForm="selectForm"
          :onFormSelect="onFormSelect"
          :onDelete="onDelete"
        >
        </van-sports-event>
        <div class="center">
          <van-button type="danger" size="middle" class="radius brown-btn" @click="onAddEvent">增加项目</van-button>
        </div>
      </div>
      <!-- 备注信息 -->
      <van-field
        v-model="message"
        label="备注"
        type="textarea"
        placeholder="请输入备注信息"
        rows="1"
        autosize
        input-align="right"
      />
      <!-- 联系电话 -->
      <van-field
        v-model="phone"
        required
        readonly
        input-align="right"
        placeholder="请输入手机号"
        style="line-height: 50px;"
      >
        <div slot="label" class="phone-label">
          <span>联系电话</span>
          <span class="flex-two"> <span>{{ mobileCode }}</span></span>
        </div>
      </van-field>
      <!-- 教育机构/工作室 -->
      <van-field
        v-model="organization"
        label="教育机构/工作室"
        type="textarea"
        placeholder="请输入机构或工作室名称"
        rows="1"
        required
        autosize
        input-align="right"
      />
      <!-- 指导老师 -->
      <van-field
        v-model="tutor"
        label="指导老师"
        type="textarea"
        placeholder="请输入指导老师名"
        rows="1"
        autosize
        required
        input-align="right"
      />
      <!-- 老师联系电话 -->
      <van-field
        v-model="tutorPhone"
        required
        input-align="right"
        placeholder="请输入导师手机号"
        style="line-height: 50px;"
        label-width="150px"
      >
        <div slot="label" class="phone-label">
          <span>导师联系电话</span>
          <span class="flex-two" @click="selectTeacherCode"> <span>{{ teacherMobileCode }}</span> <van-icon
            name="arrow-down"/></span>
        </div>
      </van-field>
      <van-action-sheet
        v-model="showTeacherCode"
        :actions="teacherCodeActions"
        @select="onTeacherCodeSelect"
      />
    </van-cell-group>
    <div style="display: flex; justify-content: space-between">
      <van-button
        round
        type="default"
        class="submit-btn"
        :loading="loading"
        @click="goBack"
      >
        上一步
      </van-button>
      <van-button
        round
        type="default"
        class="submit-btn"
        :loading="loading"
        @click="onSubmit"
      >
        下一步
      </van-button>
    </div>
  </div>
</template>

<script>
import {
  Steps,
  Step,
  CellGroup,
  Field,
  Cell,
  Icon,
  Uploader,
  Button,
  ActionSheet,
  Toast,
  RadioGroup,
  Radio
} from 'vant'
import {checkPhone} from '../util'
import SportsEvent from './SportsEvent'
import axios from 'axios'

export default {
  data () {
    return {
      // 参赛选手姓名
      name: '',
      // 性别
      gender: {
        '1': {id: 2, value: '女'},
        '2': {id: 1, value: '男'}
      },
      radio: '2',
      // 参赛地区选择
      areaIndex: 1,
      area: [],
      areaShow: false,
      areaActions: [],
      // 年龄组别
      ageIndex: 1,
      age: [],
      ageShow: false,
      ageActions: [],
      // 项目选择， 可选择三项
      listAmount: 1,
      listInfo: [
        {
          title: '主项',
          isMain: true,
          // 参赛项目选择
          eventIndex: 1,
          event: [],
          eventShow: false,
          eventActions: [],
          // 参赛形式选择
          formIndex: 1,
          form: [],
          formShow: false,
          formActions: []
        }
      ],
      // 学生电话前缀
      mobileCode: '',
      // 备注信息
      message: '',
      // 联系手机
      phone: '',
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
      // 所属机构信息
      organization: '',
      tutor: '',
      tutorPhone: '',
      loading: false
    }
  },
  created: function () {
    let token = window.sessionStorage.getItem('token')
    if (!token) {
      this.$router.replace('/')
    } else if (!window.sessionStorage.getItem('step1Data')) {
      this.$router.replace('/step1')
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
      if (res.order && res.order.pay_status && res.order.pay_status === 1) {
        return vm.$router.replace('/info')
      }
      vm.mobileCode = '+' + res.userInfo.mobile_code
      vm.phone = res.userInfo.mobile
      if (res.order && res.orderItem.length > 0) {
        console.log('第二次')
        vm.initConfig(res, function () {
          // 初始化
          vm.getAddress(function () {
            // 参赛地区选择
            vm.areaIndex = res.order.address_id
          })
          vm.getAgeGroup(function () {
            // 年龄组别
            vm.ageIndex = res.order.group_id
          })
          // 项目选择，可选择三项
          vm.listAmount = res.orderItem.length
          if (res.orderItem.length > 0) {
            vm.getEvent(vm.areaIndex, vm.ageIndex, null, function (config) {
              console.log(config)
              // 清空list
              let list = []
              // 找到对应event
              let eventData = []
              let eventMap = [{}]
              config.map((item, index) => {
                eventData.push({
                  name: item.project_name,
                  id: index + 1,
                  projectId: item.project_id,
                  formList: item.formList
                })
                eventMap.push({
                  value: item.project_name,
                  id: index + 1,
                  projectId: item.project_id,
                  formList: item.formList
                })
              })
              // 将旧的注册信息插入
              res.orderItem.map((item, index) => {
                console.log(item)
                let eventIndex = 1
                let formIndex = 1
                eventMap.map((event, EventIndex) => {
                  if (event.projectId && item.project_id === event.projectId) {
                    eventIndex = EventIndex
                  }
                })
                let formData = []
                let formMap = [{}]
                eventMap[eventIndex].formList.map((form, FormIndex) => {
                  console.log(form, form.form_id, item.form_id)
                  if (form.form_id && item.form_id === form.form_id) {
                    formIndex = FormIndex + 1
                  }
                })
                eventMap[eventIndex].formList.map((form, FormIndex) => {
                  formData.push({
                    name: form.form_name,
                    id: FormIndex + 1,
                    formId: form.form_id,
                    config: form
                  })
                  formMap.push({
                    value: form.form_name,
                    id: FormIndex + 1,
                    formId: form.form_id,
                    config: form
                  })
                })
                list.push({
                  title: item.sort === 1 ? '主项' : '附加项',
                  isMain: item.sort === 1,
                  eventShow: false,
                  eventActions: eventData,
                  event: eventMap,
                  eventIndex: eventIndex,
                  formIndex: formIndex,
                  form: formMap,
                  formActions: formData
                })
              })
              vm.listInfo = []
              list.map(item => {
                vm.listInfo.push({
                  title: item.title,
                  isMain: item.isMain,
                  // 参赛项目选择
                  eventIndex: item.eventIndex,
                  event: item.event,
                  eventShow: item.eventShow,
                  eventActions: item.eventActions,
                  // 参赛形式选择
                  formIndex: item.formIndex,
                  form: item.form,
                  formShow: item.formShow,
                  formActions: item.formActions
                })
              })
            })
          }
        })
      } else {
        console.log('第一次')
        // 初始化
        vm.getAddress(vm.getEvent)
        vm.getAgeGroup(vm.getEvent)
      }
    }, function (error) {
      Toast.fail(error)
    })
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
    selectArea: function () {
      // 选择参赛地区
      console.log('selectArea')
      this.areaShow = true
    },
    selectAge: function () {
      // 选择参赛年龄组别
      console.log('selectAge')
      this.ageShow = true
    },
    onAreaSelect: function (item) {
      // 选定参赛地区
      console.log(item)
      this.areaShow = false
      if (item.id !== this.area[this.areaIndex].id) {
        this.listInfo.splice(1)
        this.areaIndex = item.id
        this.getEvent(item.id, this.age[this.ageIndex].id, 0)
      }
    },
    onAgeSelect: function (item) {
      // 选定参赛年龄组别
      console.log(item)
      this.ageShow = false
      if (item.id !== this.age[this.ageIndex].id) {
        this.listInfo.splice(1)
        this.ageIndex = item.id
        this.getEvent(this.area[this.areaIndex].id, item.id, 0)
      }
    },
    selectEvent: function (index) {
      // 选择参赛项目
      console.log(index)
      console.log(this.listInfo[index])
      this.listInfo[index].eventShow = true
    },
    onEventSelect: function (item, index) {
      // 选定参赛地区
      console.log(item)
      if (item.id !== this.listInfo[index].eventIndex) {
        console.log('change')
        this.listInfo[index].eventIndex = item.id
        this.configForm(item, index)
      }
      this.listInfo[index].eventShow = false
    },
    selectForm: function (index) {
      // 选择参赛方式
      console.log('select Form')
      this.listInfo[index].formShow = true
    },
    onFormSelect: function (item, index) {
      // 选定参赛方式
      this.formShow = false
      console.log(item)
      this.listInfo[index].formIndex = item.id
      this.listInfo[index].formShow = false
    },
    onDelete: function (index) {
      // 删除所选项目
      console.log(index)
      this.listInfo.splice(index, 1)
    },
    onAddEvent: function () {
      // 增加项目
      console.log('Add')
      if (this.listInfo.length < 3) {
        this.listInfo = this.listInfo.concat(
          {
            title: '附加项',
            isMain: false,
            // 参赛项目选择
            eventIndex: 1,
            event: this.listInfo[0].event,
            eventShow: false,
            eventActions: this.listInfo[0].eventActions,
            // 参赛形式选择
            formIndex: 1,
            form: this.listInfo[0].form,
            formShow: false,
            formActions: this.listInfo[0].formActions
          }
        )
      } else {
        Toast.fail('每个团体或个人最多仅能参加3个项目')
      }
    },
    validation: function () {
      console.log('validation')
      let name = this.name.trim()
      let message = this.message.trim()
      let organization = this.organization.trim()
      let tutor = this.tutor.trim()
      let tutorPhone = this.tutorPhone.trim()
      let eventList = []
      this.listInfo.map((item, index) => {
        if (item.event.length > 0) {
          eventList.push({
            project_id: item.event[item.eventIndex].projectId,
            project_name: item.event[item.eventIndex].value,
            form_id: item.form[item.formIndex].formId,
            form_name: item.form[item.formIndex].value,
            sort: index + 1,
            charge: item.isMain ? item.form[item.formIndex].config.main_charge : item.form[item.formIndex].config.add_charge,
            settle_currency: item.form[item.formIndex].config.settle_currency
          })
        }
      })
      // 判断是否有两个一样的报名项目 projectId and form
      console.log(eventList)
      if (eventList.length < 1) {
        Toast.fail('暂时无可报名的项目！')
        return false
      }
      if (eventList.length > 1) {
        for (let i = 0; i < eventList.length - 1; i++) {
          for (let j = 1; j < eventList.length; j++) {
            if (eventList[i].project_id === eventList[j].project_id && eventList[i].form_id === eventList[j].form_id) {
              Toast.fail('不能报名两个完全相同的项目')
              return false
            }
          }
        }
      }
      if (name === '') {
        Toast.fail('请输入您的姓名！')
        return false
      }
      if (organization === '') {
        Toast.fail('请输入您的所属机构或工作室！')
        return false
      }
      if (tutor === '') {
        Toast.fail('请输入您的指导老师姓名！')
        return false
      }
      if (tutorPhone === '') {
        Toast.fail('请输入您的指导老师联系方式！')
        return false
      }
      if (!checkPhone(tutorPhone)) {
        Toast.fail('您输入的指导老师联系方式有误！')
        return false
      }
      return {
        real_name: name,
        sex: this.radio,
        address_id: this.area[this.areaIndex].addressId,
        address_name: this.area[this.areaIndex].value,
        group_id: this.age[this.ageIndex].groupId,
        group_name: this.age[this.ageIndex].value,
        remark: message,
        teacher_organization: organization,
        teacher: tutor,
        teacher_mobile_code: this.teacherMobileCode,
        teacher_mobile: tutorPhone,
        orderItem: eventList
      }
    },
    goBack: function () {
      this.$router.replace('/step1')
    },
    onSubmit: function () {
      if (this.validation()) {
        let info = this.validation()
        let params = {
          ...info
        }
        console.log(params)
        let vm = this
        Toast.loading({
          mask: true,
          message: '资料上传中...',
          duration: 0
        })
        this.toEnroll(params, function (res) {
          Toast.clear()
          // 备份当前状态
          console.log(res.data.data)
          window.sessionStorage.setItem('step2Data', 'true')
          vm.$router.push({name: 'Step3'})
        }, function (error) {
          Toast.clear()
          Toast.fail(error)
        })
      }
    },
    getAddress: function (callback) {
      axios
        .get('api/MatchAddress/select')
        .then(res => {
          if (res.data.code === 200) {
            this.configArea(res.data.data, callback)
          } else {
            Toast.fail('地址信息获取失败')
          }
        })
        .catch(error => {
          console.log(error)
          Toast.fail('地址信息获取失败')
        })
    },
    getAgeGroup: function (callback) {
      axios
        .get('api/MatchGroup/select')
        .then(res => {
          if (res.data.code === 200) {
            this.configAgeGroup(res.data.data, callback)
          } else {
            Toast.fail('年龄分组获取失败')
          }
        })
        .catch(error => {
          console.log(error)
          Toast.fail('年龄分组获取失败')
        })
    },
    getEvent: function (addressId, groupId, index, callback) {
      axios
        .post('api/MatchProject/select', {'address_id': addressId, 'group_id': groupId})
        .then(res => {
          if (res.data.code === 200) {
            if (res.data.data.length > 0) {
              this.configEvent(res.data.data, index, callback)
            } else {
              Toast.fail('该地区还没有可参加的项目！')
            }
          } else {
            Toast.fail('获取参赛项目失败')
          }
        })
        .catch(error => {
          console.log(error)
          Toast.fail('获取参赛项目失败')
        })
    },
    configArea: function (config, callback) {
      let addressData = []
      let addressMap = [{}]
      config.map((item, index) => {
        addressData.push({
          name: item.address_name,
          id: index + 1,
          addressId: item.address_id
        })
        addressMap.push({
          value: item.address_name,
          id: index + 1,
          addressId: item.address_id
        })
      })
      this.areaActions = addressData
      this.area = addressMap
      if (callback && this.area[this.areaIndex] && this.age[this.ageIndex]) {
        callback(this.area[this.areaIndex].addressId, this.age[this.ageIndex].groupId, 0)
      }
    },
    configAgeGroup: function (config, callback) {
      let ageData = []
      let ageMap = [{}]
      config.map((item, index) => {
        ageData.push({
          name: item.group_name + item.min_age + '-' + item.max_age + '岁',
          id: index + 1,
          groupId: item.group_id
        })
        ageMap.push({
          value: item.group_name + item.min_age + '-' + item.max_age + '岁',
          id: index + 1,
          groupId: item.group_id
        })
      })
      this.ageActions = ageData
      this.age = ageMap
      if (callback && this.area[this.areaIndex] && this.age[this.ageIndex]) {
        callback(this.area[this.areaIndex].addressId, this.age[this.ageIndex].groupId, 0)
      }
    },
    configEvent: function (config, index, callback) {
      console.log(config)
      if (callback) {
        callback(config)
      } else {
        let eventData = []
        let eventMap = [{}]
        config.map((item, index) => {
          eventData.push({
            name: item.project_name,
            id: index + 1,
            projectId: item.project_id,
            formList: item.formList
          })
          eventMap.push({
            value: item.project_name,
            id: index + 1,
            projectId: item.project_id,
            formList: item.formList
          })
        })
        this.listInfo[index].eventActions = eventData
        this.listInfo[index].event = eventMap
        this.configForm(this.listInfo[index].event[this.listInfo[index].eventIndex], index)
      }
    },
    configForm: function (formList, index) {
      let formData = []
      let formMap = [{}]
      formList.formList.map((item, index) => {
        formData.push({
          name: item.form_name,
          id: index + 1,
          formId: item.form_id,
          config: item
        })
        formMap.push({
          value: item.form_name,
          id: index + 1,
          formId: item.form_id,
          config: item
        })
      })
      this.listInfo[index].formActions = formData
      this.listInfo[index].form = formMap
    },
    toEnroll: function (params, success, fail) {
      axios
        .post('api/MatchOrder/insert', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            success(res)
          } else {
            fail()
          }
        })
        .catch(error => {
          fail(error.response.data.msg)
        })
    },
    init: function (token, success, fail) {
      axios
        .get('api/MyOrder/info', {
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
    },
    initConfig: function (res, callback) {
      console.log(res)
      let mobileCode = {
        '86': 0,
        '853': 1,
        '852': 2,
        '856': 3
      }
      // 参赛选手姓名
      this.name = res.order.real_name
      this.radio = res.order.sex + ''
      // 备注信
      this.message = res.order.remark
      // 老师手机区号配置
      this.teacherZone = mobileCode[res.order.teacher_mobile_code + '']
      this.teacherMobileCode = '+' + res.order.teacher_mobile_code
      // 所属机构信息
      this.organization = res.order.teacher_organization
      this.tutor = res.order.teacher
      this.tutorPhone = res.order.teacher_mobile
      callback()
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
    'van-action-sheet': ActionSheet,
    'van-sports-event': SportsEvent,
    'van-radio-group': RadioGroup,
    'van-radio': Radio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .radio-float {
    float: right;
    text-align: right;
    width: 60px;
    justify-content: space-evenly;
  }

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

  .flex-two {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
