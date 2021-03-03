<template>
	<div class="home-swiper">
		<swiper :options="swiperOption" ref="mySwiper" v-if="banners.length > 1">
			<!-- slides -->
			<swiper-slide v-for="(item, index) in banners" :key="index" class="home-swiper-item">
				<a :href="item.link"><img :src="item.image" alt="" @load="imageLoad"/></a>
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
				return [];
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
				}
			}
		};
	},
	methods: {
		imageLoad() {
			this.$emit("swiperImgLoad")
		}
	},
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
