<template>
  <div class="bottom-bar">
    <div class="shop-item">
      <div class="service">
        <i class="service-icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="shop-icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="collect-icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="add-to-cart" @click="addToCart">
      加入购物车
    </div>
    <div class="purchase">
      购买
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit("addToCart")
    }
  },
}
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
}

.shop-item {
  flex: 1;
  display: flex;
  text-align: center;
  background-color: #fff;
}
.shop-item div {
  flex: 1;
  font-size: 13px;
  padding-top: 3px;
}
.service-icon,
.shop-icon,
.collect-icon {
  width: 22px;
  height: 22px;
  display: block;
  margin: 0 auto;
  margin-top: 3px;
}
.service-icon {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 50% 40.927%/80%;
}
.shop-icon {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 50% 78%/80%;
}
.collect-icon {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 50% -4%/80%;
}

.add-to-cart,
.purchase {
  width: 26%;
  font-size: 14px;
  text-align: center;
  padding-top: 15px;
}
.add-to-cart {
  background-color: #fddc0e;
}
.purchase {
  background-color: #fd769a;
  color: #fff;
}
</style>