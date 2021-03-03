<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
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
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  z-index: 9;
}

</style>