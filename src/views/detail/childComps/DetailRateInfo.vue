<template>
	<div class="rate-info">
		<div class="rate-more">
			<div class="rate-text">用户评价</div>
			<div class="more">
				更多
				<i class="arrow-right"></i>
			</div>
		</div>
		<div v-if="Object.keys(userInfo).length > 0">
			<div class="rate-user">
				<img :src="userInfo.user.avatar" alt="" />
				<span>{{ userInfo.user.uname }}</span>
			</div>
			<div class="rate-content">
				<p>{{ userInfo.content }}</p>
				<div class="rate-img">
					<img
						v-for="(img, index) in userInfo.images"
						:key="index"
						:src="img"
						alt=""
					/>
				</div>
				<div>
					<span>{{ userInfo.created }}</span>
					<span>{{ userInfo.style }}</span>
				</div>
			</div>
		</div>
		<div v-else>
			<p class="none-rate">暂无评价</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "DetailRateInfo",
	props: {
		rate: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		userInfo() {
			return this.rate.list ? this.rate.list[0] : [];
		}
	}
};
</script>
<style scoped>
.rate-info {
	width: 100%;
	margin-top: 15px;
	padding: 0 10px 15px;
	border-bottom: 8px solid #f5f7fa;
}
.rate-more {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f7f7f7;
	padding: 10px 0;
}
.rate-text {
	font-size: 15px;
}
.more {
	padding-right: 15px;
	font-size: 13px;
}
.arrow-right {
	position: relative;
	top: -1px;
}

.rate-user {
	display: flex;
	align-items: center;
	padding: 10px 0 5px;
}
.rate-user img {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	margin-right: 15px;
}

.rate-content p {
	font-size: 14px;
	color: #777;
}
.rate-content div span {
	font-size: 12px;
	color: #999;
	padding-right: 15px;
}
.rate-img {
	display: flex;
	padding: 10px 0;
}
.rate-img img {
	max-height: 80px;
	max-width: 60px;
	margin-right: 10px;
}
.none-rate {
	padding: 10px 0 0;
}
</style>
