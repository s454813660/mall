<template>
  <div class="cate-detail">
    <goods-list :goods="showDetail"></goods-list>
  </div>
</template>
<script>
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: 'CateDetail',
  components: {
    GoodsList
  },
  props: {
    showDetail: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style scoped>
</style>