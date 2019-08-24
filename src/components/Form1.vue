<template>
  <div class="form">
    <canvas class="canvas" ref="canvas"></canvas>
    <div>
      <van-steps :active="active" active-color="#ffcc80">
        <van-step>上传证件</van-step>
        <van-step>填写信息</van-step>
        <van-step>支付缴费</van-step>
        <van-step>报名结果</van-step>
      </van-steps>
      <step-one></step-one>
    </div>
  </div>
</template>

<script>
import { Steps, Step } from 'vant'
import StepOne from './Step1'
import { drawbackground } from '../util'
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted: function () {
    drawbackground(this)
  },
  methods: {
  },
  components: {
    'van-steps': Steps,
    'van-step': Step,
    'step-one': StepOne
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
