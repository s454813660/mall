<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="desc">
      <p>{{goods.title}}</p>
    </div>
    <div class="info-price">
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice" >{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <div v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.base-info {
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  border-bottom: 8px solid #f5f7fa;
}
.desc {
  color: #222;
  font-size: 15px;
  box-sizing: border-box;
}
.info-price {
  margin-top: 3px;
}
.price {
  color: var(--color-high-text);
  font-size: 24px;
  padding-right: 8px;
}
.oldPrice {
  font-size: 13px;
  text-decoration: line-through;
  color: rgb(110, 110, 110);
  padding-right: 8px;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 8px;
  color: #fff;
  position: relative;
  top: -8px;
}
.other-info {
  display: flex;
  font-size: 14px;
  margin-top: 15px;
  border-bottom: 1px solid #f2f5f8;
  justify-content: space-between;
  line-height: 30px;
  color: #999;
}
.info-service {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 15px 0;
}
.info-service img {
  width: 15px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
</style>