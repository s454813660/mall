<template>
  <div class="nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div class="title-item"
               v-for="(item, index) in titles"
               :key="index"
               @click="itemClick(index)"
               :class="{active: currentIndex === index}">
              {{item}}
            </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品","详情","参数","评论"],
      currentIndex: 0
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index)
    }
  },
}
</script>
<style scoped>
.back {
  padding-top: 2px;
}
.back img{
  width: 14px;
  height: 14px;
}
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text)
}
</style>