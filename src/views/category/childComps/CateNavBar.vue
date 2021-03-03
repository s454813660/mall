<template>
  <div class="cate-nav-bar">
    <nav-bar>
      <template v-slot:center>
        商品分类
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'CateNavBar',
  components: {
    NavBar
  }
}
</script>
<style scoped>
.cate-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>