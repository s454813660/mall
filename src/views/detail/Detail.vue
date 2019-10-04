<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @showBack="contentscroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo" @detailImgLoad="detailImgLoad" ref="goods"></detail-goods-info>
      <detail-params-info :paramInfo="paramInfo" ref="params"></detail-params-info>
      <detail-rate-info :rateInfo="rateInfo" ref="rate"></detail-rate-info>
      <detail-goods-recommend :goodsItem="goodsItem"></detail-goods-recommend>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'


import DetailNavBar from './childComps/DatailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailRateInfo from './childComps/DetailRateInfo'
import DetailGoodsRecommend from './childComps/DetailGoodsRecommend'

import { getDetail, 
         getDetailRecommend,
         Goods,
         Shop,
         Params } from 'network/detail'
import { mixin } from 'common/mixin'
import { debounce } from 'common/utils'
export default {
  name: 'Detail',
  mixins: [mixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      goodsInfo: {},
      paramInfo: {},
      rateInfo: {},
      goodsItem: [],
      detailRefresh: null,
      themeTopYs: [],
      positionY: 0,
      currentIndex: 0,
    }
  },
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailRateInfo,
    DetailGoodsRecommend
  },
  created() {
    // 1.保存iid
    this.iid = this.$route.params.iid
    // 2.请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.data.result
      // 顶部轮播图片数据
      this.topImages = data.itemInfo.topImages
      // 请求商品信息
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
      //请求店铺信息
      this.shopInfo = new Shop(data.shopInfo)
      // 请求商品详情信息
      this.goodsInfo = data.detailInfo
      // 请求商品尺码样式信息
      this.paramInfo = new Params(data.itemParams.rule.desc, data.itemParams.rule.tables[0], data.itemParams.info.set)
      // 请求用户评价信息
      if(data.rate.list){
        this.rateInfo = data.rate.list[0]
      }
      
    })
    getDetailRecommend().then( res => {
      this.goodsItem = res.data.data.list
    })
  },
  mounted() {

  },
  updated() {
      
  },
  destroyed() {
    this.$bus.$off('goodsImageLoad')
  },
  methods: {
    detailImgLoad() {
      this.$refs.scroll.refresh() 
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      if(this.$refs.rate.$el.offsetTop){
        this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
      }
      console.log(this.themeTopYs);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentscroll(position) {
      // 获取Y值并保存下来 positionY
      this.positionY = -position.y
      // console.log(this.positionY);
      // 通过获取的Y值与主题Y数组(themeTopYs)进行比对 分别进行一个判断
      // 当positionY大于等于themeTopYs[0] 且小于themeTopYs[1]  index = 0
      // 当positionY大于等于themeTopYs[1] 且小于themeTopYs[2]  index = 1
      // 当positionY大于等于themeTopYs[2] 且小于themeTopYs[3]  index = 2
      // 当positionY大于等于themeTopYs[3]                      index = 3
      let length = this.themeTopYs.length
      for(let i = 0; i < length; i++) {
        if((this.currentIndex !== i) && ((i < length - 1 && this.positionY >= this.themeTopYs[i] && this.positionY < this.themeTopYs[i + 1]) || (i === length - 1 && this.positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
    }
  }
}
</script>
<style scoped>
 #detail {
   position: relative;
   z-index: 10;
   background-color: #fff;
   height: 100vh;
   border-bottom: 3px solid #f5f7fa
 }
.content {
  background-color: #fff;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>