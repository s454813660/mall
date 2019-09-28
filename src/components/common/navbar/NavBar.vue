<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
.nav-bar {
  height: 44px;
  display: flex;
  text-align: center;
}

.left,
.right{
  width: 50px;
}
.center {
  flex: 1;
  margin-top: 10px;
}
</style>