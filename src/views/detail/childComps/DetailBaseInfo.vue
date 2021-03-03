<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      <p>{{goods.title}}</p>
    </div>
    <div class="info-price">
      <span class="price">{{goods.price}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.service[goods.service.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <div class="service" v-for="index in goods.service.length-1" :key="index">
        <img :src="goods.service[index-1].icon" alt="">
        <span>{{goods.service[index-1].name}}</span>
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
  margin-top: 15px;
  padding: 0 10px; 
  border-bottom: 8px solid #f5f7fa;
}
.info-title {
  font-size: 15px;
}

.info-price {
  margin-top: 3px;
}
.price {
  color: var(--color-high-text);
  font-size: 24px;
  padding-right: 8px;
}
.oldprice {
  font-size: 13px;
  text-decoration: line-through;
  padding-right: 8px;
  color: rgb(100,100,100);
}
.discount {
  font-size: 12px;
  padding: 3px;
  color: #fff;
  border-radius: 8px;
  position: relative;
  top: -8px;
}

.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
  margin-top: 15px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #f2f5f8;
}

.info-service {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 13px;
}
.info-service img {
  width: 15px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
</style>