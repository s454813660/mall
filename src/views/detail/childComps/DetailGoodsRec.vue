<template>
  <div class="goods-rec">
    <goods-list :goods="recGoods">
    </goods-list>
  </div>
</template>
<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: 'DetailGoodsRec',
  components: {
    GoodsList
  },
  props: {
    recGoods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
</style>