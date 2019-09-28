<template>
  <div class="detail-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="topImages.length >= 1">
      <!-- slides -->
      <swiper-slide v-for="item in topImages" class="detail-swiper-item">
        <img :src="item" alt/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    topImages: {
      type: Array,
      default() {
        []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletActiveClass: "active",
          clickableClass: 'pagination-clickable',
        },
      },
    }
  }
}
</script>
<style>
.detail-swiper-item {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.detail-swiper-item img{
  width: 100%;
  overflow: hidden;
}
.active {
    background-color: #fff;
    opacity: 1;
}
.pagination-clickable {
  border: none;
}
</style>