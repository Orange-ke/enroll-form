import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import EventDetail from '@/components/EventDetail'
import QueryInfo from '@/components/QueryInfo'
import Info from '@/components/Info'
import Form1 from '@/components/Form1'
import Form2 from '@/components/Form2'
import Form3 from '@/components/Form3'
import Form4 from '@/components/Form4'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Entry',
    components: {default: Entry},
    meta: { title: '澳之星大赛' }
  },
  {
    path: '/eventDetail',
    name: 'EventDetail',
    components: {default: EventDetail},
    meta: { title: '澳之星报名项目详情' }
  },
  {
    path: '/step1',
    name: 'Step1',
    components: {default: Form1},
    meta: { title: '澳之星报名-第一步' }
  },
  {
    path: '/step2',
    name: 'Step2',
    components: {default: Form2},
    meta: { title: '澳之星报名-第二步' }
  },
  {
    path: '/step3',
    name: 'Step3',
    components: {default: Form3},
    meta: { title: '澳之星报名-第三步' }
  },
  {
    path: '/step4',
    name: 'Step4',
    components: {default: Form4},
    meta: { title: '澳之星报名-第四步' }
  },
  {
    path: '/queryInfo',
    name: 'QueryInfo',
    components: {default: QueryInfo},
    meta: { title: '澳之星大赛-入口' }
  },
  {
    path: '/info',
    name: 'Info',
    components: {default: Info},
    meta: { title: '澳之星报名信息' }
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
