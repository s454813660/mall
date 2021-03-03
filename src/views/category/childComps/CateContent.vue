<template>
	<div class="tab-content clear-fix">
		<div
			class="content-item"
			v-for="(item, index) in subcategories.list"
			:key="index"
		>
			<a :href="item.link">
				<img :src="item.image" alt="" @load="subLoad"/>
				<div class="item-text">{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>
<script>
export default {
	name: "CateContent",
	props: {
		subcategories: {
			type: Object,
			default() {
				return {};
			}
		}
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    subLoad() {
      this.count++;
      if(this.count === this.subcategories.length){
        this.$emit("subLoad")
        this.count = 0;
      }
    }
  },
};
</script>
<style scoped>
.tab-content {
	flex: 1;
	padding: 10px;
}
.content-item {
	float: left;
	text-align: center;
	width: 30%;
	font-size: 12px;
	margin-right: 10px;
}
.content-item:nth-child(3n) {
	margin-right: 0;
}
.tab-content::after {
	content: "";
	flex: 1;
}

.tab-content img {
	width: 80%;
}
.item-text {
	margin-top: 12px;
}
</style>
