<template>
  <div id="home">
    <nav-bar id="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '推荐']"
                    @tabClick="tabClick"
                    ref="tabControl2"
                    class="tab-control"
                    v-show="isTabFixed"></tab-control>
    <scroll class="content" 
            :probeType="3" 
            ref="scroll"
            @showBack="showBack"
            :pull-up-load="true"
            @pullingUp="loadMore"
            > 
      <home-swiper :banners="banners"
                    @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行', '新款', '推荐']"
                    @tabClick="tabClick"
                    ref="tabControl1"
                    ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBack"></back-top>
  </div>
</template>
<script>
/**
 * 引用公共组件
 */
import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from "components/common/scroll/Scroll";

/**
 * 引用私有组件
 */

import HomeSwiper from "./homeComps/HomeSwiper";
import HomeRecommendView from "./homeComps/HomeRecommendView";
import HomeFeatureView from './homeComps/HomreFeatureview'
/**
 * 
 */
import {getHomeMultiData, getHomeData} from 'network/home.js'
import { addListenerRefresh, addListenerBackTop } from 'common/mixin'
export default {
  name: "Home",
  mixins: [addListenerRefresh, addListenerBackTop],
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    

    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list: []},
        'new': {page:0, list: []},
        'sell': {page:0, list: []},
      },
      currentType: 'pop',
      
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      homeRefresh: null,
    }
  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /**
     * 网络请求
     */
    getHomeMultiData(){
        getHomeMultiData().then( res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    /**
     * 
     */
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    
    showBack(position){
      this.isShowBack = position.y < -800
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    swiperImageLoad() {
      // console.log('接收轮播图加载完成信息');
      this.$refs.scroll.refresh()
    },
    loadMore() {
      this.getHomeData(this.currentType)
    },
    swiperImageLoad() {
      // console.log('接收轮播图加载完成信息');
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted() {
    this.tabClick(0)
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);
    this.$bus.$off('goodsImageLoad')
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
#home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  z-index: 9;
}
.tab-control{
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>