// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'
import wx from 'weixin-jsapi'
import axios from 'axios'
import router from './router'
import { isWeiXin, getQueryString } from './util'
import App from './App'

const routerGuard = () => {
  // 路由保护
  router.beforeEach((to, from, next) => {
    console.log(to.fullPath)
    if (to.meta.title) { // 判断是否有标题
      document.title = to.meta.title
    }
    next()
  })

  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
}

const initInstance = () => {
  // 设置http请求配置
  axios.defaults.baseURL = 'https://star.zdb.im/'
  axios.defaults.headers = {
    'content-type': 'application/json'
  }
  // 注册wx 到全局Vue 对象
  Vue.prototype.$wx = wx
  // 全局注册懒加载
  Vue.use(Lazyload)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}

// 若没有token则为首次进入
if (!window.sessionStorage.getItem('token')) {
  if (isWeiXin()) {
    // 微信环境， 需要登陆微信拿到openID
    console.log('session 中没有token')
    let openIdFromSession = window.sessionStorage.getItem('openId')
    if (openIdFromSession) {
      routerGuard()
      initInstance()
    } else {
      // url中携带url
      // 还未存入openid
      let openIdFromUrl = getQueryString('openId')
      if (openIdFromUrl) {
        window.sessionStorage.setItem('openId', openIdFromUrl)
        let url = window.location.href.slice(0, window.location.href.indexOf('?'))
        window.location.replace(url)
      } else {
        // url中未携带openid
        window.location.replace('https://star.zdb.im/api/Login/index')
      }
    }
  } else {
    // 非微信环境
    routerGuard()
    initInstance()
  }
} else {
  // 若有token则直接渲染
  routerGuard()
  initInstance()
}
