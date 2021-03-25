<template>
  <div class="goods-list-item">
    <div class="goods-item-img" @click="itemClick()">
      <img v-lazy="goodsItem.img || goodsItem.image || goodsItem.show.img" alt="" @load="imageLoad">
    </div>
    <div class="goods-item-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: Object,
    default() {
      return {}
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad")
    },
    itemClick() {
      if(this.goodsItem.iid){
        this.$router.push('/detail/'+ this.goodsItem.iid)
      }
    }
  },
}
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  margin-bottom: 3px;
}

.goods-item-img img {
  width: 100%;
  border-radius: 5px;
}

.goods-item-info {
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
}
.goods-item-info .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item-info span {
  font-size: 12px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  position: absolute;
  left: -15px;
  top: -1px;
  content: '';
  height: 14px;
  width: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>