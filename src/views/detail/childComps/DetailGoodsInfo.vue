<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length>= 1">
    <div class="goods-desc">
      <div class="start"></div>
      <div class="desc clear-fix">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="goods-info-list" v-for="(item, index) in detailInfo.detailImage"
                            :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="img-list" v-for="(img, i) in item.list" :key="i">
        <img :src="img" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
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
  computed: {
    totalImageLoad() {
      return this.detailInfo.detailImage.map( val => {
        return val.list? val.list.length : 0
      }).reduce( (prev, val) => {
        return prev += val
      },0)
    }
  },
  methods: {
    imgLoad() {
      this.counter++;
      if(this.counter === this.totalImageLoad){
        this.$emit("detailImgLoad")
      }
    }
  },
}
</script>
<style scoped>
.goods-info {
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
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
.goods-desc .start::before {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  top: -5px;
}
.goods-desc .end {
  float: right;
}
.goods-desc .end::after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  right: 0;
  top: -5px;
}
.desc {
  padding: 15px 0;
}


.goods-info-list .info-key {
  padding: 15px 0;
}

.img-list img{
  width: 100%;
}
</style>