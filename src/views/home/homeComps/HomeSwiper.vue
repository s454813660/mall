<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="banners.length > 1">
      <!-- slides -->
      <swiper-slide v-for="item in banners" class="home-swiper-item">
        <img :src="item.image" alt @load="imageLoad"/>
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
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
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
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      // console.log('轮播图加载完成');
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      } 
    }
  }
};
</script>
<style>
.home-swiper {
  width: 100%;
}
.home-swiper-item img {
  width: 100%;
  height: 100%;
}
.home-swiper .active {
  background: #fff;
  opacity: 1;
}
.pagination-clickable {
  border: none;
}
</style>