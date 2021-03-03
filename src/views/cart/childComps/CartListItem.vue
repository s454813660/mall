<template>
	<div class="cart-list-item">
		<check-button @click.native="checkClick" :isChecked="product.checked"></check-button>
		<div class="display">
      <div class="left">
        <img :src="product.sku.img" alt="">
      </div>
      <div class="right">
        <p class="title">{{product.title}}</p>
        <p class="desc">{{product.desc}}</p>
        <p class="style">{{product.sku.style}}{{product.sku.size}}</p>
        <div class="price-count">
          <div class="price">
            {{product.sku.currency}}
            {{nowPrice}}
          </div>
          <div class="count">
            <span class="decrement" @click="decrement">-</span>
            <span>{{product.count}}</span>
            <span class="increment" @click="increment">+</span>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import CheckButton from "./CheckButton"
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
	props: {
		product: {
			type: Object,
			default() {
				return {};
			}
		}
  },
  computed: {
    nowPrice() {
      return (this.product.sku.nowprice/100).toFixed(2)
    },
  },
  methods: {
    decrement() {
      this.$emit("decrement")
    },
    increment() {
      this.$emit("increment")
    },
    checkClick() {
      this.$emit("checkClick")
    }
  },
};
</script>
<style scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  align-items: center;
  overflow: hidden;
  font-size: 17px;
}

/* display */
.display {
  display: flex;
  overflow: hidden;
}
.display .left img {
  max-width: 80px;
  border-radius: 6px;
}
/* display > right */
.right {
  overflow: hidden;
  margin-left: 8px;
  position: relative;
}
.right p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  font-size: 17px;
}
.desc {
  font-size: 13px;
  margin-top: 12px;
}
.style {
  font-size: 14px;
  margin-top: 10px;
}
.price-count {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}
.price {
  font-weight: 600;
  color: var(--color-high-text);
}
.count {
  border: 1px solid #eee;
  border-radius: 5px;

}
.increment,
.decrement{
  padding: 5px;
}
.count span:nth-child(2) {
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  padding: 0 5px;
}
.increment {
  color: var(--color-high-text);
}
</style>
