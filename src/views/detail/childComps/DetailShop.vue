<template>
  <div class="shop-info">
    <div class="top">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="sells">
          <div class="sells-count">
            {{shopInfo.sell | sellCountFilter}}<span v-if="shopInfo.sell > 10000">万</span>
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods">
          <div class="goods-cate">{{shopInfo.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index" class="score">
            <td>{{item.name}}</td>
            <td :style="{color: item.isBetter? '#5ea732' : '#f13e3a'}">{{item.score}}</td>
            <td :style="{color: item.isBetter? '#5ea732' : '#f13e3a'}"><span>{{item.isBetter? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <div class="enter-shop">
        <a :href="shopInfo.shopUrl">
          <div>进店逛逛</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if(value < 10000){
        return value
      }
      return (value/10000).toFixed(1)
    }
  }
}
</script>
<style scoped>
.shop-info {
  width: 100%;
  padding: 0 10px;
  margin-top: 15px;
  border-bottom: 8px solid #f5f7fa
}
.top {
  height: 45px;
  line-height: 45px;
  display: flex;
  align-items: center;
}
.top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(0,0,0,.1);
}
.top span {
  font-size: 18px;
  color: #7b7b7b;
}

.middle {
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 15px 0;
}
.middle-left .middle-right{
  flex: 1;
}
.middle-left {
  display: flex;
  justify-content: space-evenly;
  width: 45%;
  margin-left: 15px;
  text-align: center;
  border-right: 1px solid #e6e6e6;
}
.sells, .goods {
  margin-right: 15px;
}
.sells-count, .goods-cate{
  margin-bottom: 5px;
  font-size: 18px;
}
.sells-count span {
  font-size: 15px;
}
.goods-text, .sells-text{
  font-size: 12px;
}
.goods-text {
  white-space: nowrap;
} 
.middle-right {
  width: 38%;
  margin-left: 30px;
}
.middle-right table {
  margin: 0 auto;
}
.middle-right .score td {
  padding: 5px 5px 5px 0;
}
.bottom {
  width: 100%;
  padding: 5px 0 20px 0;
}
.bottom .enter-shop {
  width: 150px;
  text-align: center;
  margin: auto;
  background-color: #f2f5f8;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
</style>