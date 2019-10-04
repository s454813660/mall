<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo) !== -1">
    <div class="goods-desc">
      <div class="start"></div>
      <div class="desc clear-fix">{{goodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="goods-info-list" v-for="(item, index) in goodsInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list" v-for="(img, indey) in item.list" :key="indey">
        <img :src="img" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  created() {

  },
  computed: {
      totalImageLoad(){
        return this.goodsInfo.detailImage.map((val) => {
          return val.list? val.list.length : 0
        }).reduce((total, val) => {
          return total + val
        }, 0)
      }
  },
  methods: {
    imageLoad() {
      this.counter++
      if(this.counter === this.totalImageLoad){
        // console.log(this.totalImageLoad);
        // console.log('图片加载完成');
        this.$emit('detailImgLoad')
      }
    } 
  }
}
</script>
<style scoped>
.goods-info {
  width: 100%;
  padding: 0 10px;
  margin-top: 15px;
  border-bottom: 8px solid #f5f7fa;
}
.goods-desc .start, .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.goods-desc .start {
  float: left;
}
.goods-desc .start:before {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.goods-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.goods-desc .end {
  float: right;
}
.goods-desc .end:after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
  right: 0;
}



.goods-info-list {
  width: 100%;
}
.goods-info-list .info-key {
  padding: 15px 0;
  font-size: 15px;
}
.goods-info-list img {
  width: 100%;
}
</style>