import { debounce } from 'common/utils'
import BackTop from 'components/content/backtop/BackTop'


export const addListenerRefresh = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.homeRefresh = () => {
      refresh()
    }
    this.$bus.$on('goodsImageLoad', this.homeRefresh)
  }
}


export const addListenerBackTop = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBack: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}