<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isShow"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="colorActive"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      
    }
  },
  props: {
    path: String,
    colorStyle: {
      type: String,
      default: '#ff4466'
    }
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    colorActive() {
      return this.isShow? {color: '#ff4466'} : {}
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path.indexOf(this.path) === -1){
        this.$router.replace(this.path)
      } 
    }
  }
  
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>