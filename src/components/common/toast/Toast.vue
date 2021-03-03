<template>
	<div class="toast" v-show="isShow">
		<div>{{ message }}</div>
	</div>
</template>
<script>
export default {
	name: "Toast",
	data() {
		return {
			message: "",
			isShow: false
		};
	},
	methods: {
		show(message, duration=2000) {
			this.message = message;
			this.isShow = true;
			setTimeout(() => {
				this.message = '';
				this.isShow = false;
			}, duration);
		}
	}
};
</script>
<style scoped>
.toast {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 11;
	background-color: rgba(0, 0, 0, 0.7);
	color: #fff;
	padding: 8px 10px;
	border-radius: 5px;
}
</style>
