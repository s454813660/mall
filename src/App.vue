<template>
	<div id="app">
		<transition name="app">
			<keep-alive exclude="Detail">
				<router-view class="router-view"></router-view>
			</keep-alive>
		</transition>
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
	name: "app",
	components: {
		MainTabBar
	}
};
</script>

<style>
.app-enter-active {
	transition: all 0.3s ease;
}
.app-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.app-enter, .app-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
.router-view {
	width: 1 00%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: 0 auto;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
</style>
