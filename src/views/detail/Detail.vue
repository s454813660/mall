<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DatailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import { getDetail } from 'network/detail'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // 1.保存iid
    this.iid = this.$route.params.iid
    // 2.请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 顶部轮播图片数据
      this.topImages = res.data.result.itemInfo.topImages
    })
  },
}
</script>
<style scoped>

</style>