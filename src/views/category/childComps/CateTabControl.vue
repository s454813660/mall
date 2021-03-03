<template>
  <div class="cate-tab-control">
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
  </div>
</template>
<script>
import TabControl from "components/content/tabcontrol/TabControl"
export default {
  name: 'CateTabControl',
  components: {
    TabControl
  },
  data() {
    return {
      titles: ["综合", "运动", "新品"]
    }
  },
  methods: {
    tabClick(index) {
      this.$emit("tabClick", index)
    }
  },
}
</script>
<style scoped>
.cate-tab-control {
  font-size: 15px;
}
</style>