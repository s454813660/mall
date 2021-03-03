<template>
	<div id="detail">
		<detail-nav-bar class="d-nav-bar" @itemClick="itemClick" ref="navbar"></detail-nav-bar>
		<scroll ref="scroll" 
						:probetype="3"
						:pullUpLoad="true"
						class="content"
						@scroll="backScroll"
			>
			<detail-swiper
				:topImages="topImages"
				class="detail-swiper"
			></detail-swiper>
			<detail-base-info :goods="goods" ></detail-base-info>
			<detail-shop :shopInfo="shopInfo"></detail-shop>
			<detail-goods-info :detailInfo="detailInfo"
												 @detailImgLoad="detailImgLoad"
												 ref="goods"></detail-goods-info>
			<detail-goods-params :itemParams="itemParams" ref="param"></detail-goods-params>
			<detail-rate-info :rate="rate" ref="rate"></detail-rate-info>
			<detail-goods-rec :recGoods="recGoods" ref="rec"></detail-goods-rec>
		</scroll>
		<back-top @click.native="backtop" v-show="isShowBack"></back-top>
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
		<transition name="fade">
			<add-to-cart :skuInfo="skuInfo" ref="addCart" v-show="isShow"></add-to-cart>
		</transition>
		
	</div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailRateInfo from "./childComps/DetailRateInfo";
import DetailGoodsRec from "./childComps/DetailGoodsRec";
import AddToCart from "./childComps/AddToCart";

import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, 
				 getDetailRecommend,
				 Goods,
				 Shops } from "network/detail.js";

import { debounce } from "common/utils";
import { addListenerBackTop } from "common/mixin";
export default {
	name: "Detail",
	mixins: [addListenerBackTop],
	components: {
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShop,
		DetailGoodsInfo,
		DetailGoodsParams,
		DetailRateInfo,
		DetailGoodsRec,
		AddToCart,

		DetailBottomBar,

		Scroll,
	},
	props: {
		iid: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			topImages: [],
			goods: {},
			shopInfo: {},
			detailInfo: {},
			itemParams: {},
			rate: {},
			recGoods: [],
			themeTopYs: [],
			skuInfo: {},
			currentIndex: 0,
			isShow: false
		};
	},
	created() {
		this._getDetail();
		this._getDetailRecommend();
	},
	mounted() {
		const refresh = debounce(this.$refs.scroll.refresh,100)
	},
	methods: {
		_getDetail() {
			getDetail(this.iid).then(res => {
				const data = res.data.result;
				// console.log(data);
				
				//  获取轮播图信息
				this.topImages = data.itemInfo.topImages;
				//  获取商品基本信息
				this.goods = new Goods(
					data.columns,
					data.itemInfo,
					data.shopInfo.services
				);
				//  获取商店信息
				this.shopInfo = new Shops(data.shopInfo);
				//  获取商品详细信息
				this.detailInfo = data.detailInfo;
				//  获取商品尺寸信息
				this.itemParams = data.itemParams;
				//  获取评价信息
				this.rate = data.rate;
				// 获取sku信息
				this.skuInfo = data.skuInfo;
			});
		},
		_getDetailRecommend() {
			getDetailRecommend().then(res => {
				this.recGoods = res.data.data.list;
			})
		},

		detailImgLoad() {
			this.$refs.scroll.refresh()
			this.themeTopYs.push(0);
			this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
			this.themeTopYs.push(this.$refs.param.$el.offsetTop);
			if(this.$refs.rate){
				this.themeTopYs.push(this.$refs.rate.$el.offsetTop);
			}else{
				this.themeTopYs.push(this.$refs.rec.$el.offsetTop);
			}
			this.themeTopYs.push(Number.MAX_VALUE)
		},

		itemClick(index) {
			this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
		},

		backScroll(position) {
			this.isShowBack = (-position.y) > 800;
			for(let i = 0; i< this.themeTopYs.length; i++ ) {	
				let iPos = this.themeTopYs[i];
				// 当位置在this.themeTopYs[0]和this.themeTopYs[2]之间
				if((-position.y) >= iPos && (-position.y) < this.themeTopYs[i+1]) {
					if(this.$refs.navbar.currentIndex !== i) {
						this.$refs.navbar.currentIndex = i;
					}
					break
				}
			}
		},


		addToCart() {
			// this.$refs.addCart.isShow = true;
			this.isShow = true;
			this.$refs.addCart.desc = this.detailInfo.desc;
		}
	}
};
</script>
<style scoped>
#detail {
	position: relative;
	height: 100vh;
}
.d-nav-bar {
	position: relative;
	z-index: 9;
	background-color: #fff;
}
.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	overflow: hidden;
}
.add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
	z-index: 11;
	background-color: #fff;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>

