<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.home-recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 15px 0;
  color: var(--color-text);
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  margin-bottom: 3px;
}
.recommend-item p {
  font-size: 12px;
}
</style>