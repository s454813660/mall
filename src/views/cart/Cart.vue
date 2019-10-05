<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>

    <!-- 商品列表展示 -->
    <cart-list :cart-list="this.cartList"></cart-list>

    <!-- 底部汇总 -->
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,

    CartList,
  },
  computed: {
    //  数组语法
    // ...mapGetters(['cartLength'])
    //  对象语法
    ...mapGetters({
      'cartLength': 'cartLength',
      'cartList' : 'cartList'
    })
  }
}
</script>
<style scoped>

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>