<template>
  <div class="form">
    <canvas class="canvas" ref="canvas"></canvas>
    <div class="content">
      <div>
        <img src="../assets/logo.png" alt="" width="100%">
      </div>
      <div class="btnGroup">
        <van-button type="default" size="large" class="brown-btn" round style="margin-top: 30px;" @click="linkToStep">我要报名</van-button>
        <van-button type="default" size="large" class="brown-btn" round style="margin-top: 30px;" @click="linkToInfo">已报名 查看报名信息</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import { drawbackground } from '../util'
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    drawbackground(this)
  },
  methods: {
    linkToStep: function () {
      let token = window.sessionStorage.getItem('token')
      if (token) {
        this.$router.push({name: 'Step1'})
      } else {
        this.$router.push({name: 'QueryInfo', params: {type: '1'}})
      }
    },
    linkToInfo: function () {
      let token = window.sessionStorage.getItem('token')
      if (token) {
        this.$router.push({name: 'Info'})
      } else {
        this.$router.push({name: 'QueryInfo', params: {type: '2'}})
      }
    }
  },
  components: {
    'van-button': Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
