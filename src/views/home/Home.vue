<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:center>
				购物街
			</template>
		</nav-bar>
		<tab-control :titles="titles"
									 @tabClick="tabClick"
									 ref="tabcontrol1"
									 class="tab-control"
									 v-show="isShowTabControl"></tab-control>
		<scroll class="content" ref="scroll"
            :probetype="3"
            :pullUpLoad="true"
            @pullingUp="loadMore"
						@scroll="backScroll">
			<home-swiper :banners="banners"
									 :swiperImgLoad="swiperImgLoad"></home-swiper>
			<home-recommend :recommend="recommend"></home-recommend>
			<home-feature></home-feature>
			<tab-control :titles="titles"
									 @tabClick="tabClick"
									 ref="tabcontrol2"></tab-control>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<back-top @click.native="backtop" v-show="isShowBack"></back-top>
	</div>
</template>
<script>
//  公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";


// 本地组件
import HomeSwiper from "views/home/homeComps/HomeSwiper";
import HomeRecommend from "views/home/homeComps/HomeRecommend";
import HomeFeature from "views/home/homeComps/HomeFeature";

import { getHomeMultiData, getHomeData } from "network/home.js";

import { debounce } from "common/utils";
import { addListenerBackTop } from "common/mixin";
export default {
	name: "Home",
	mixins: [addListenerBackTop],
	components: {
		NavBar,
		Scroll,
		TabControl,
		GoodsList,
		// BackTop,

		HomeSwiper,
		HomeRecommend,
		HomeFeature
	},
	data() {
		return {
			banners: [],
			recommend: [],
			titles: ["流行", "新款", "推荐"],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			currentType: "pop",
			// isShowBack: false,
			tabOffsetTop: 0,
			isShowTabControl: false,
			saveY: 0
		};
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		}
	},
	methods: {
		_getHomeMultiData() {
			getHomeMultiData().then(res => {
				const data = res.data.data;
				this.banners = data.banner.list;
				this.recommend = data.recommend.list;
			});
		},

		_getHomeData(type) {
			const page = this.goods[type].page + 1;
			getHomeData(type, page).then(res => {
				this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
			});
		},

		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = "pop";
					break;
				case 1:
					this.currentType = "new";
					break;
				case 2:
					this.currentType = "sell";
					break;
			};
			this.$refs.tabcontrol1.currentIndex = index;
			this.$refs.tabcontrol2.currentIndex = index;
    },
    
    // 上拉加载
    loadMore() {
      this._getHomeData(this.currentType);
		},
		
		// 返回顶部
		// backtop() {
		// 	this.$refs.scroll.scrollTo(0,0,500)
		// },

		// 是否显示返回顶部
		backScroll(position) {
			this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
			this.isShowBack = (-position.y) > 800;
			this.isShowTabControl = (-position.y) > this.tabOffsetTop;
		},
		//  轮播图加载完毕
		swiperImgLoad() {
			this.$refs.scroll.refresh()
		}
	},
	created() {
		// 请求首页数据
		this._getHomeMultiData();
		this._getHomeData("pop");
		this._getHomeData("new");
		this._getHomeData("sell");		
	},
	mounted() {
		// 监听图片加载完成
		//  防抖减少页面刷新次数
		const homeRefresh = debounce(this.$refs.scroll.refresh, 300)
		this.$bus.$on("itemImageLoad", () => {
			homeRefresh()
		})
	},
	activated() {
		this.$refs.scroll.refresh();
		this.$refs.scroll.scrollTo(0, this.saveY,0)
	},
	deactivated() {
		this.saveY = this.$refs.scroll.scroll.y;
		console.log(this.saveY);
	},
};
</script>
<style scoped>
#home {
	height: 100vh;
  position: relative;
  z-index: 9;
}
.home-nav {
	color: #fff;
  background-color: var(--color-tint);
}
.tab-control {
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
