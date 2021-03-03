<template>
	<scroll>
		<div class="cate-tab-menu">
			<div
				class="tab-menu-item"
				v-for="(item, index) in categories"
				:key="index"
				:class="{ active: currentIndex === index }"
				@click="menuTabClick(index)"
			>
				{{ item.title }}
			</div>
		</div>
	</scroll>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

export default {
	name: "CateTabMenu",
	components: {
		Scroll
	},
	props: {
		categories: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			currentIndex: 0
		};
	},
	methods: {
		menuTabClick(index) {
			this.currentIndex = index;
			this.$emit("menuTabClick", index);
		}
	}
};
</script>
<style scoped>
.cate-tab-menu {
	width: 100%;
}
.tab-menu-item {
	width: 100%;
	font-size: 14px;
	line-height: 45px;
	text-align: center;
	background-color: #FCFCFC;
}
.active {
	font-weight: 600;
	background-color: #fff;
	color: var(--color-high-text);
	border-left: 3px solid var(--color-high-text);
}
</style>
