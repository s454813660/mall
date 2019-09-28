<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommends">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
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
  font-size: 12px;
  color: var(--color-text);
  padding: 10px 0 15px 0;
  border-bottom: 8px solid #eeeeee;
}
.home-recommend-item {
  flex:1;
}
.home-recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 3px;
}
</style>