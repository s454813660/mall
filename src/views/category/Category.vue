<template>
	<div id="category">
		<cate-nav-bar></cate-nav-bar>
		<div id="content">
			<cate-tab-menu
				:categories="categories"
				@menuTabClick="menuTabClick"
				class="left-content"
			></cate-tab-menu>
			<scroll class="right-content" ref="scroll" :data="[categoryData]"
							:pullUpLoad="true">
				<cate-content
					:subcategories="showSubcategory"
					@subLoad="subLoad"
				></cate-content>
				<cate-tab-control @tabClick="tabClick"></cate-tab-control>
				<cate-detail :showDetail="showCategoryDetail"></cate-detail>
			</scroll>
		</div>
	</div>
</template>
<script>
import CateNavBar from "./childComps/CateNavBar";
import CateTabMenu from "./childComps/CateTabMenu";
import CateContent from "./childComps/CateContent";
import CateTabControl from "./childComps/CateTabControl";
import CateDetail from "./childComps/CateDetail"

import Scroll from "components/common/scroll/Scroll";

import {
	getCategory,
	getSubcategory,
	getCategoryDetail
} from "network/category";
export default {
	name: "Category",
	components: {
		CateNavBar,
		CateTabMenu,
		CateContent,
		CateTabControl,
		CateDetail,

		Scroll
	},
	data() {
		return {
			categories: [],
			categoryData: [],
			currentIndex: 0,
			flag: false,
			currentType: "pop"
		};
	},
	created() {
		this._getCategory();
	},
	mounted() {
		this.$bus.$on("itemImageLoad", () => {
			this.$refs.scroll.refresh()
		})
	},
	computed: {
		showSubcategory() {
		    if (!this.categoryData[this.currentIndex]) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
		showCategoryDetail() {
		    if (!this.categoryData[this.currentIndex]) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
	},
	methods: {
		_getCategory() {
			getCategory().then(res => {
				this.categories = res.data.data.category.list;
				for (let i = 0; i < this.categories.length; i++) {
					this.categoryData.push({
						subcategories: {},
						categoryDetail: {
							"pop": [],
							"new": [],
							"sell": [],
						}
					});
				}
				this._getSubcategory(0);
			});
		},
		_getSubcategory(index) {
			const maitKey = this.categories[index].maitKey;
				getSubcategory(maitKey).then(res => {
					this.categoryData[index].subcategories = res.data.data;
					this._getCategoryDetail(index, "pop");
					this._getCategoryDetail(index, "new");
					this._getCategoryDetail(index, "sell");
				});
		},
		_getCategoryDetail(index, type) {
			const miniWallkey = this.categories[index].miniWallkey;
			getCategoryDetail(miniWallkey, type).then(res => {
				this.categoryData[index].categoryDetail[type] = res.data;
			});
		},

		menuTabClick(index) {
			this.currentIndex = index;
			this._getSubcategory(index);
		},
		subLoad() {
			this.$refs.scroll.refresh();
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
			}
		},
	}
};
</script>
<style scoped>
#category {
	width: 100%;
	height: 100vh;
	position: relative;
}
#content {
	display: flex;
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
.right-content {
	width: 75%;
}
.left-content {
	flex: 1;
}
</style>
