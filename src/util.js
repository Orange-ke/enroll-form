
import axios from 'axios'
import { Toast } from 'vant'

const checkPhone = (phone) => {
  let regx = /^[1][3-9]\d{9}$|^[0][0][8][5][2|3][6|9]\d{6,7}$/
  return regx.test(phone)
}

const checkId = (id) => {
  let regx = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
  return regx.test(id)
}

const isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}

const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let regRewrite = new RegExp('(^|/)' + name + '/([^/]*)(/|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  let q = window.location.pathname.substr(1).match(regRewrite)
  if (r != null) {
    return unescape(r[2])
  } else if (q != null) {
    return unescape(q[2])
  } else {
    return null
  }
}

// wx bridgeReady
const onBridgeReady = (response) => {
  alert(JSON.stringify(response.data))
  WeixinJSBridge.invoke(
    "getBrandWCPayRequest",
    response.data,
    function (res) {
      try {
        WeixinJSBridge.log(res.err_msg)
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          // 跳转到支付结果页面
          // router.push('submit-order/pay-result?outTradeNo=' + outTradeNo) // 通过 vue router跳转
          window.location.href = window.location.protocol + '//' + window.location.host + '/step4'
          // 以上两种方式在支付回调回来都不执行
        } else {
          if (res.err_msg === 'get_brand_wcpay_request:fail') {
            Toast.fail('支付失败， 请尝试重新支付')
          }
          if (res.err_msg === 'get_brand_wcpay_request:cancel') {
            Toast.fail('取消支付')
          }
        }
      } catch (e) {
        alert(e.message)
        console.log(JSON.stringify(e.message))
      }
    }
  )
}

// 若是微信端打开， 执行以下代码进行支付
// TODO 获取openid
const wxPay = (params, onBridgeReady) => {
  axios
    .post('api/MatchOrder/pay', params)
    .then(res => {
      if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false)
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady)
          document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady)
        }
      } else {
        onBridgeReady(res.data)
      }
    })
    .catch(error => {
      alert(JSON.stringify(error))
      Toast.fail(error.response.data.msg)
    })
}

// 微信外环境中， 进行h5支付调用
const h5Pay = (params, callback, redirectUrl) => {
  console.log('H5')
  axios
    .post('api/MatchOrder/pay', params)
    .then(res => {
      if (res.data.code === 200) {
        // let outTradeNo = res.data.data.outTradeNo
        let redirectUrl = window.location.protocol + '//' + window.location.host + '/step4'
        let mwebUrl = res.data.data.mweb_url + '&redirect_url=' + encodeURIComponent(redirectUrl)
        let form = document.createElement('FORM')
        document.body.appendChild(form)
        form.setAttribute('method', 'POST')
        form.setAttribute('action', mwebUrl)
        form.submit()
      }
    })
    .catch(error => {
      alert(JSON.stringify(error))
      Toast.fail(error.response.data.msg)
    })
}

const createBall = (canvas, ball) => {
  console.log(canvas.width, canvas.height)
  let _x = Math.random() * canvas.width
  let _y = Math.random() * canvas.height
  let _r = Math.random() + 0.01
  let _vx = Math.random() * 0.5 * Math.pow(-1, Math.floor(Math.random() * 2 + 1))
  let _vy = Math.random() * 0.5 * Math.pow(-1, Math.floor(Math.random() * 2 + 1))
  ball.push({
    x: _x,
    y: _y,
    r: _r,
    vx: _vx,
    vy: _vy
  })
}

const distance = (point1, point2) => {
  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
}

const render = (num, canvas, context, balls) => {
  for (let k = 0; k < num; k++) {
    context.save()
    context.beginPath()
    context.arc(balls[k].x, balls[k].y, balls[k].r, 0, Math.PI * 2)
    context.stroke()
    context.restore()
  }
  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      if (distance(balls[i], balls[j]) < 200) {
        context.beginPath()
        context.moveTo(balls[i].x, balls[i].y)
        context.lineTo(balls[j].x, balls[j].y)
        context.stroke()
      }
    }
  }
  for (let k = 0; k < num; k++) {
    balls[k].x += balls[k].vx
    balls[k].y += balls[k].vy

    if (balls[k].x - balls[k].r > canvas.width) {
      balls[k].x = 0 - balls[k].r
    }
    if (balls[k].x + balls[k].r < 0) {
      balls[k].x = canvas.width + balls[k].r
    }
    if (balls[k].y - balls[k].r > canvas.height) {
      balls[k].y = 0 - balls[k].r
    }
    if (balls[k].y + balls[k].r < 0) {
      balls[k].y = canvas.height + balls[k].r
    }
  }
}

const drawbackground = (target) => {
  let balls = []
  let num = 20
  let canvas = target.$refs.canvas
  let context = canvas.getContext('2d')
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight
  context.fillStyle = 'rgba(255, 152, 0, 0.1)'
  context.strokeStyle = 'rgba(255, 152, 0, 0.1)'
  context.lineWidth = 0.5
  for (let i = 0; i < num; i++) {
    createBall(canvas, balls)
  }
  (function loop () {
    context.clearRect(0, 0, canvas.width, canvas.height)
    render(num, canvas, context, balls)
    requestAnimationFrame(loop)
  })()
}

export {
  getQueryString,
  checkPhone,
  checkId,
  h5Pay,
  isWeiXin,
  onBridgeReady,
  wxPay,
  drawbackground
}
