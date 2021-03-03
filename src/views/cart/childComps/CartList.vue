<template>
	<div class="cart-list">
		<scroll>
			<cart-list-item
				v-for="(item, index) in cartList"
				:key="index"
				:product="item"
				@increment="increment(index)"
				@decrement="decrement(index)"
				@checkClick="checkClick(index)"
			>
				<slot></slot>
			</cart-list-item>
		</scroll>
	</div>
</template>
<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
	name: "CartList",
	components: {
		CartListItem,
		Scroll
	},
	computed: {
		...mapGetters({
			cartList: "cartList"
		})
	},
	methods: {
		increment(index) {
			this.cartList[index].count++;
		},
		decrement(index) {
			if (this.cartList[index].count === 1) {
				this.cartList.splice(index, 1);
				return;
			}
			this.cartList[index].count--;
		},
		checkClick(index) {
			this.cartList[index].checked = !this.cartList[index].checked;
		}
	}
};
</script>
<style scoped>
.cart-list {
	width: 100%;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 89px;
  width: 100%;
  overflow: hidden;
}
</style>
