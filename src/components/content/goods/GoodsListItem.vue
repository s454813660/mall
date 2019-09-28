<template>
  <div class="goods-item">
    <div class="goods-item-img" @click="itemClick">
        <img :src="goodsItem.show.img" alt="" @load="imageLoad"/>
    </div>
    <div class="goods-item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      // console.log('图片加载完成');
      this.$bus.$emit('goodsImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  
}
.goods-item-img img{
  width: 100%;
  border-radius: 5px;
}
.goods-item-info {
  text-align: center;
  width: 100%;
  position: absolute;
  font-size: 14px;
  overflow: hidden;
  margin-bottom: 3px;
}
.goods-item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-item-info span {
  font-size: 12px;
}
.price {
  margin-right: 20px;
  color: var(--color-high-text);
}
.collect {
  position: relative;
}
.collect:before {
  position: absolute;
  left: -15px;
  top: -1px;
  content: '';
  height: 14px;
  width: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>