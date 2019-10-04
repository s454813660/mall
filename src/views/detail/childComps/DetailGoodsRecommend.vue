<template>
  <div class="datail-recommend">
    <div class="recommend-text">热门推荐</div>
    <goods-list :goods="goodsItem"></goods-list>
  </div>
</template>
<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'DetailGoodsRecommend',
  components: {
    GoodsList
  },
  props: {
    goodsItem: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.datail-recommend {
  width: 100%;
}
.recommend-text {
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  font-size: 15px;
}
</style>