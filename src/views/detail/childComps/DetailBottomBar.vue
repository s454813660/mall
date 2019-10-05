<template>
  <div class="bottom-bar">
    <div class="shop-item">
      <div class="c-service">
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
      this.$emit('addToCart')
    }
  }
}
</script>
<style scoped>
.bottom-bar {
  width: 100%;
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.shop-item{
  flex: 1;
  display: flex;
}
.shop-item div {
  padding-top: 5px;
  flex: 1;
  font-size: 13px;
}
.service-icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  padding-top: 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0px -40px/80% no-repeat;
}

.shop-icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  padding-top: 3px;
  background: url('~assets/img/detail/detail_bottom.png') 2px -76px/80% no-repeat;
}
.collect-icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  padding-top: 3px;
  background: url('~assets/img/detail/detail_bottom.png') 2px 3px/80% no-repeat;
}
.add-to-cart,
.purchase
{
  width: 26%;
  padding-top: 14px;
}
.add-to-cart {
  background-color: #fddc0e;
}
.purchase {
  background-color: #fd769a;
  color: #fff;
}
</style>