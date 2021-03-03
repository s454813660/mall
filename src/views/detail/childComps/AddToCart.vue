<template>
	<div
		class="add-to-cart"
		v-if="Object.keys(skuInfo).length !== 0"
	>
		<div class="top">
			<img
				src="~assets/img/common/closed.png"
				alt=""
				class="closed"
				@click="closed"
			/>
			<div class="main-info">
				<img :src="skuInfo.skus[0].img" alt="" />
				<div class="right-info">
					<div class="price">
						<span>￥</span>
						<span>{{ skuInfo.priceRange.substring(1) }}</span>
					</div>
					<div class="stock">
						库存{{ (stock && stock>=0) ? stock : skuInfo.totalStock }}件
					</div>
					<div class="sku-text">
						<span v-show="isChosen">已选择:</span>
						<span :class="{ active: isChosen }">{{
							color ? color : "请选择：尺码 颜色"
						}}</span>
					</div>
				</div>
			</div>
		</div>
		<scroll ref="scroll">
			<div class="middle">
				<div class="style">
					<div class="public">颜色</div>
					<div class="style-list">
						<div
							class="style-item"
							v-for="(item, index) in skuInfo.props[0].list"
							:key="index"
							@click="styleClick(index)"
							:class="{ active: styleIndex === index }"
						>
							{{ item.name }}
						</div>
					</div>
				</div>
				<div class="size">
					<div class="public">尺码</div>
					<div class="size-list">
						<div
							class="size-item"
							v-for="(item, index) in skuInfo.props[1].list"
							:key="index"
							@click="sizeClick(index)"
							:class="{ active: sizeIndex === index }"
						>
							{{ item.name }}
						</div>
					</div>
				</div>
				<div class="count">
					<div class="public">数量</div>
					<div class="count-calc">
						<span class="dec" @click="decrement">-</span>
						<span class="count-text">{{ count }}</span>
						<span class="inc" @click="increment">+</span>
					</div>
				</div>
			</div>
		</scroll>

		<div class="bottom">
			<div class="btn-red" @click="addToCart">确定</div>
		</div>
	</div>
</template>
<script>
import scroll from "components/common/scroll/Scroll";
export default {
	name: "AddToCart",
	components: {
		scroll
	},
	props: {
		skuInfo: {
			type: Object,
			default() {
				return {};
			}
		},
	},
	data() {
		return {
			stock: "",
			color: "",
			count: 1,
			styleIndex: null,
			sizeIndex: null,
			size: "",
			style: "",
			isChosen: false,
			desc: ""
		};
	},
	methods: {
		stockChange(style, size) {
			if (size === "") {
				this.stock = this.skuInfo.skus
					.filter(item => item.style === style)
					.reduce((oldV, curV) => {
						return (oldV += curV.stock);
					}, 0);
			} else if (style === "") {
				this.stock = this.skuInfo.skus
					.filter(item => item.size === size)
					.reduce((oldV, curV) => {
						return (oldV += curV.stock);
					}, 0);
			} else if (style === "" && size === "") {
				this.stock = this.skuInfo.totalStock;
			} else {
				this.stock = this.skuInfo.skus
					.filter(item => item.style === style && item.size === size)
					.reduce((oldV, curV) => {
						return (oldV += curV.stock);
					}, 0);
			}
		},
		colorChange(style, size) {
			if (style === "" && size !== "") {
				this.color = "请选择：尺码";
				this.isChosen = false;
			} else if (size === "" && style !== "") {
				this.color = "请选择：颜色";
				this.isChosen = false;
			} else if (style === "" && size === "") {
				this.color = "请选择：尺码 颜色";
				this.isChosen = false;
			} else {
				this.color = '"' + style + '"' + '"' + size + '"';
				this.isChosen = true;
			}
		},

		closed() {
			this.$parent.isShow = false;
		},

		styleClick(index) {
			if (this.styleIndex === index) {
				this.styleIndex = null;
				if (this.sizeIndex == null) {
					this.style = "";
					this.size = "";
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				} else {
					this.style = "";
					this.size = this.skuInfo.props[1].list[this.sizeIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				}
			} else {
				this.styleIndex = index;
				if (this.sizeIndex == null) {
					this.size = "";
					this.style = this.skuInfo.props[0].list[this.styleIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				} else {
					this.size = this.skuInfo.props[1].list[this.sizeIndex].name;
					this.style = this.skuInfo.props[0].list[this.styleIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				}
			}
		},

		sizeClick(index) {
			if (this.sizeIndex === index) {
				this.sizeIndex = null;
				if (this.styleIndex == null) {
					this.style = "";
					this.size = "";
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				} else {
					this.size = "";
					this.style = this.skuInfo.props[0].list[this.styleIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				}
			} else {
				this.sizeIndex = index;
				if (this.styleIndex == null) {
					this.style = "";
					this.size = this.skuInfo.props[1].list[this.sizeIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				} else {
					this.size = this.skuInfo.props[1].list[this.sizeIndex].name;
					this.style = this.skuInfo.props[0].list[this.styleIndex].name;
					this.stockChange(this.style, this.size);
					this.colorChange(this.style, this.size);
				}
			}
		},

		decrement() {
			if (this.count <= 1) {
				this.count = 1;
			} else {
				this.count--;
			}
		},
		increment() {
			this.count++;
		},
		addToCart() {
			const product = {};
			if (this.size === "" && this.style !== "") {
				this.$toast.show("请选择尺码");
			} else if (this.style === "" && this.size !== "") {
				this.$toast.show("请选择颜色");
			} else if (this.size === "" && this.style === "") {
				this.$toast.show("请选择商品属性");
			} else {
				product.sku = this.skuInfo.skus.find(
					item => item.size === this.size && item.style === this.style
				);
				product.count = this.count;
				product.title = this.skuInfo.title;
        product.desc = this.desc;
        this.$store.dispatch("addCart", product).then(res => {
					this.$toast.show(res);
				})
      }
		}
	}
};
</script>
<style scoped>
/* top */
img.closed {
	width: 15px;
	height: 15px;
	position: absolute;
	right: 16px;
	top: 15px;
	z-index: 11;
}
.main-info {
	padding: 15px 8px;
	display: flex;
	position: relative;
}
.main-info img {
	max-height: 150px;
	width: 80px;
	margin-left: 8px;
	position: absolute;
	bottom: 15px;
}
.right-info {
	margin-left: 104px;
}
.right-info .price span:nth-child(1) {
	font-size: 12px;
	position: relative;
	top: -7px;
}
.right-info .price span:nth-child(2) {
	font-size: 28px;
	line-height: 30px;
}
.stock {
	font-size: 12px;
}
.sku-text {
	font-size: 12px;
	color: #333;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

/* middle */
.wrapper {
  height: 200px;
  overflow: hidden;
}

.middle {
	padding: 0 8px 15px;
}
.public {
	line-height: 12px;
	font-size: 12px;
	margin: 8px 0 5px 0;
}
.style-list div,
.size-list div {
	display: inline-block;
	line-height: 26px;
	padding: 0 15px;
	border: 1px solid #bbb;
	border-radius: 3px;
	margin-right: 10px;
	margin-bottom: 10px;
	font-size: 12px;
	cursor: pointer;
	color: #5e5e5e;
	white-space: nowrap;
	text-align: center;
	max-width: 340px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.count-calc {
	display: flex;
	border: 1px solid #bbb;
	width: 90px;
	text-align: center;
	height: 25px;
	border-radius: 3px;
	line-height: 25px;
}
.inc,
.dec {
	display: block;
	width: 28px;
	font-size: 16px;
	cursor: pointer;
}
.inc {
	color: var(--color-high-text);
}
.count-text {
	flex: 1;
	font-size: 14px;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
}
.btn-red {
	font-size: 13px;
	text-align: center;
	height: 49px;
	line-height: 49px;
	color: #fff;
	background-color: var(--color-tint);
}
.active {
	color: var(--color-high-text) !important;
	border-color: var(--color-high-text) !important;
}
</style>
