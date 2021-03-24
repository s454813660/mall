<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probetype: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probetype: this.probetype,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });

    // 上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    });

    // 监听滚动
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position)
    })
  },
  methods: {
    //上拉加载完毕
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    // 滚动到指定位置
    scrollTo(x, y, delay=500) {
      this.scroll && this.scroll.scrollTo(x, y, delay)
    },

    // 页面刷新
    refresh() {
      this.scroll && this.scroll.refresh()
      // console.log(123);  
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh,20)
    }
  },
}
</script>
<style scoped>
.content {
  width: 100%;
}
</style>