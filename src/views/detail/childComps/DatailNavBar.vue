<template>
  <div class="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item, index) in titles"
               class="title-item"
               @click="itemClick(index)"
               :class="{active: currentIndex === index}"
               :key="index">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '详情', '参数', '评论'],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.back {
  width: 100%;
  height: 100%;
  padding-top: 14px;
}
.back img {
  width: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>