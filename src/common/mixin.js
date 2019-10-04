import { debounce } from 'common/utils'
export const mixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.homeRefresh = () => {
      refresh()
    }
    this.$bus.$on('goodsImageLoad', this.homeRefresh)
  }
}