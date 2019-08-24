<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="100%"/>
      </van-swipe-item>
    </van-swipe>
    <div class="detail">
      <div class="title">
        {{ eventConfig.title }}
      </div>
      <div class="time">
        <span>比赛时间: </span>
        <span>{{ eventConfig.time }}</span>
      </div>
      <div class="location">
        <span>比赛时间: </span>
        <span>{{ eventConfig.location }}</span>
      </div>
      <div class="zone">
        {{ eventConfig.zone }}
      </div>
      <div class="detailInfo">
        <div class="detailTitle">活动详情</div>
        <div class="detailContent">
          {{ eventConfig.info }}
        </div>
        <!-- swiper -->
        <div class="slider">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(image, index) in swiperSlides" :key="index">
              <img :src="image" alt="slider" width="100%" @click="preview">
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="btnGroup">
        <van-button type="default" size="large" class="brown-btn" round style="margin-top: 30px;" @click="linkToStep">我要报名</van-button>
        <van-button type="default" size="large" class="brown-btn" round style="margin-top: 30px;" @click="linkToInfo">已报名 查看报名信息</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Button, Swipe, SwipeItem, ImagePreview } from 'vant'
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      eventConfig: {
        title: '澳之星俺们赛区少年组舞蹈比赛火热报名中！！！',
        time: '2019-08-19',
        location: '澳门机场',
        zone: '澳门赛区',
        info: '这次赛事非常好看这次赛事非常好看这次赛事非常好看这次赛事非常好看这次赛事非常好看这次赛事非常好看这次赛事非常好看这次赛事非常好看',
        imagesDetail: []
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      swiperSlides: [
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    linkToStep: function () {
      this.$router.push('/step1')
    },
    linkToInfo: function () {
      this.$router.push('/queryInfo')
    },
    preview: function (e) {
      console.log(e.target.getAttribute('src'))
      let src = e.target.getAttribute('src')
      ImagePreview({images: [src]})
    }
  },
  components: {
    'van-button': Button,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'swiper': swiper,
    'swiper-slide': swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail {
    background: #fff;
    padding: 10px 16px;
    color: saddlebrown;
    text-align: justify;
  }
  .title {
    font-weight: 600;
  }
  .zone {
    display: inline-block;
    padding: 5px 15px;
    background: #ffcc80;
    border-radius: 15px;
    float: right;
    margin-top: -46px;
  }
  .time {
    margin-top: 10px;
  }
  .location {
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f7f7f7;
  }
  .detailInfo {
    padding: 15px 0;
  }
  .detailTitle {
    font-weight: 600;
  }
  .detailContent {
    margin-top: 15px;
    font-size: 15px;
  }
  .slider {
    margin-top: 15px;
  }
  .btnGroup {
    padding-bottom: 30px;
  }
</style>
