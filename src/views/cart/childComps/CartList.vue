<template>
  <div></div>
</template>
<script>
export default {
  name: 'CartList',
  props: {
    cartList: {
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