<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="styleColor"><slot name="item-text"></slot></div>
	</div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {

    }
  },
  props: {
    path: String,
    colorActive: {
      type: String,
      default: '#ff4466'
    }
  },
  computed: {
    isActive() {
      return this.path === this.$route.path
    },
    styleColor() {
      return this.isActive? {color: this.colorActive} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
}
</script>
<style scoped>
.tab-bar-item {
	flex: 1;
}
.tab-bar-item img {
	width: 24px;
	height: 24px;
	vertical-align: middle;
	margin-top: 3px;
	font-size: 14px;
}
</style>
