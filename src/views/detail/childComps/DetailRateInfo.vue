<template>
  <div class="rate-info">
    <div class="rate-more">
      <div class="rate-text">用户评价</div>
      <div class="more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div v-if="Object.keys(rateInfo).length !== 0">
      <div class="rate-user"> 
        <img :src="rateInfo.user.avatar" alt="">
        <span class="user-name">{{rateInfo.user.uname}}</span>
      </div>
      <div class="rate-content">
        <p>{{rateInfo.content}}</p>
        <div class="rate-img">
          <img v-for="(img, index) in rateInfo.images" :src="img" alt="" :key="index">
        </div>
        <div>
          <span>{{rateInfo.created | showDate}}</span>
          <span>{{rateInfo.style}}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="none-rate">暂无评价</p>
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/utils.js'
export default {
  name: 'DetailRateInfo',
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
}
</script>
<style scoped>
.rate-info {
  width: 100%;
  padding: 5px 12px;
  border-bottom: 5px solid #f5f7fa;
}
.rate-more {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.more {
  font-size: 13px;
  padding-right: 15px;
  float: right;
}
.rate-text {
  font-size: 15px;
  float: left;
}
.more-tex {
  padding-right: 5px;
}

.rate-user {
  padding: 10px 0 5px 0;
}
.rate-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
  margin-right: 20px;
}

.rate-user .user-name{
  position: relative;
  top: -15px;
  font-size: 15px;
}
.rate-content {
  padding: 0 5px 15px 5px;
}
.rate-content p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
}
.rate-content .rate-img {
  width: 100%;
  overflow: hidden;
}
.rate-content img{
  max-width: 60px;
  max-height: 80px;
  padding: 15px 10px 0 0;
}
.rate-content div {
  padding-top: 5px;
}
.rate-content div span {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  padding-right: 15px;
}
.none-rate {
  line-height: 40px;
  height: 40px;
  font-size: 14px;
}
</style>