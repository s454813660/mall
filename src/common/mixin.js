import BackTop from "components/content/backtop/BackTop";
export const addListenerBackTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBack: false,
    }
  },
  methods: {
    backtop() {
			this.$refs.scroll.scrollTo(0,0,500)
		},
  },
}