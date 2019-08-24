<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0e0e0e+0,7d7e7d+100 */
  background: #0e0e0e; /* Old browsers */
  background: -moz-linear-gradient(top,  #0e0e0e 0%, #7d7e7d 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #0e0e0e 0%,#7d7e7d 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #0e0e0e 0%,#7d7e7d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e0e0e', endColorstr='#7d7e7d',GradientType=0 ); /* IE6-9 */
  min-height: 100vh;
}
.van-steps.van-steps--horizontal {
  background: transparent;
}
.van-step--horizontal .van-step__circle-container {
  background: transparent;
}
.van-step--finish .van-step__circle, .van-step--finish .van-step__line {
  background-color: #ffcc80;
  box-shadow: 1px 1px 10px #ffcc80;
}
.van-steps.van-steps--horizontal {
  margin-right: 20px;
}
.van-step__circle-container {
  width: 25px;
  height: 25px;
}
.van-step__line {
  background: bisque;
}
.van-step__circle {
  margin: 0 auto;
  height: 25px;
  width: 25px;
  background: bisque;
  box-shadow: 1px 1px 10px bisque;
}
.van-step--horizontal .van-step__icon {
  font-size: 25px;
}
.van-step--horizontal:last-child {
  right: -20px;
}
.van-steps {
  overflow: initial;
}
.van-step--horizontal .van-step__title {
  margin-left: 13px;
  margin-top: 50px;
  color: #fff;
}
.van-icon-checked {
  border-radius: 50px;
  box-shadow: 1px 1px 10px #ffcc80;
}
.van-step--horizontal .van-step__icon {
  border-radius: 50px;
  background: #fff;
}
.van-cell-group.group {
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 1px 1px 20px bisque;
}
.align-center {
  text-align: center;
}
.van-hairline--top-bottom::after {
  border: none;
}
.van-popup--top {
  width: 50%;
  left: 25%;
}
.van-field__label {
  width: 110px;
}
.van-dropdown-menu__title::after {
  top: 20px;
}
.van-dropdown-menu__title--down::after {
  top: 23px;
}
.center {
  margin-top: 15px;
  text-align: center;
}
.radius {
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.brown-btn {
  border: 1px solid saddlebrown;
  background: #ffcc80;
  color: saddlebrown;
}
.submit-btn {
  margin-top: 30px;
  width: 45%;
  background: #ffcc80;
  border: 1px solid #ffcc80;
  color: #212121;
  font-weight: 600;
}
.one {
  width: 100%;
}
.clear {
  content: ' ';
  display: inline-block;
  clear: both;
}
.van-tabs__nav {
  background: transparent;
}
.van-tabs__content {
  margin-top: 5px;
  padding-top: 10px;
  border-top: 1px solid #5e5e5e;
}
.van-tab {
  color: #fff;
}
.van-tab--active {
  color: #ffcc80;
}
.van-tabs__line {
  background-color: #ffcc80;
}
.card-style {
  border-radius: 15px;
  overflow: hidden;
  padding: 10px 15px;
  background: #fff;
  font-size: 14px;
}
.van-card__bottom {
  margin-top: 30px;
}
.van-image {
 border-radius: 8px;
  box-shadow: 1px 1px #ddd;
  overflow: hidden;
}
.van-cell__value, .van-cell__title, .van-field__control {
  color: saddlebrown;
}
.form {
  position: relative;
  padding: 30px 16px;
  box-sizing: border-box;
  min-height: 100vh;
}
.canvas {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  min-height: 100vh;
}
.content {
  background: transparent;
  padding: 30px 16px;
  top: 0;
  left: 0;
  min-height: 100vh;
  position: absolute;
  box-sizing: border-box;
}
.title {
  padding: 0 0 20px 0;
}
.top-margin {
  margin-top: 15px;
}
.flex-two {
  flex: 2;
}
</style>
