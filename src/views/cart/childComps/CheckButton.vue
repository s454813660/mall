<template>
	<div class="check-button" :class="{ checked: isChecked }">
		<img src="~assets/img/cart/tick.svg" alt="" />
	</div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
.check-button {
	width: 20px;
	height: 20px;
	line-height: 20px;
	border: 1px solid #dddddd;
	border-radius: 50%;
  margin-right: 8px;
}
.checked {
  background-color: #ff4466;
}
</style>
