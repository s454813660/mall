<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
import TabBarItem from './TabBarItem'
export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>
<style scoped>
.tab-bar {
  height: 49px;
  display: flex;
  text-align: center;
  background-color: #eeeeee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  z-index: 9;
}
</style>