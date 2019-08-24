<template>
  <div class="form">
    <van-steps :active="active" active-color="#ffcc80">
      <van-step>上传证件</van-step>
      <van-step>填写信息</van-step>
      <van-step>支付缴费</van-step>
      <van-step>报名结果</van-step>
    </van-steps>
    <step-three></step-three>
  </div>
</template>

<script>
import { Steps, Step } from 'vant'
import StepThree from './Step3'

export default {
  data () {
    return {
      active: 2
    }
  },
  methods: {
  },
  components: {
    'van-steps': Steps,
    'van-step': Step,
    'step-three': StepThree
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
