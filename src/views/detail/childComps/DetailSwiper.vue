<template>
	<swiper
		:options="swiperOption"
		ref="mySwiper"
		v-if="topImages.length >= 1"
		class="detail-swiper">
		<swiper-slide
			v-for="(item, index) in topImages"
			:key="index"
			class="swiper-item">
			<img :src="item" alt="" />
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
	name: "DetailSwiper",
	components: {
		swiper,
		swiperSlide
	},
	props: {
		topImages: {
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
	}
};
</script>
<style>
.detail-swiper {
	width: 100%;
	height: 300px;
	overflow: hidden;
}
.swiper-item img {
	width: 100%;
}
.detail-swiper .active {
	background: #fff;
	opacity: 1;
}
.pagination-clickable {
  border: none;
}
</style>
