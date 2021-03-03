<template>
	<nav-bar class="cart-nav">
		<template v-slot:center> 购物车<span>({{cartLength}})</span> </template>
	</nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex"
export default {
	name: "CartNavBar",
	components: {
		NavBar
	},
	computed: {
		...mapGetters(["cartLength"])
	},
};
</script>
<style scoped>
.cart-nav {
  color: #fff;
	height: 44px;
	background-color: var(--color-tint);
}
</style>
