<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button :isChecked="isCheckedAll" @click.native="checkAll"></check-button>
      <div>全选</div>
    </div>
    <div class="count-all">
      <span>总价</span>
      <span>￥{{totalPrice.toFixed(2)}}</span>
    </div>
    <div class="calculate" @click="countPrice">
      去计算({{calcCount}})
    </div>
  </div>
</template>
<script>
import CheckButton from "./CheckButton";
import {mapGetters} from "vuex"
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    calcCount() {
      return this.cartList.filter(item => item.checked === true).length
    },
    totalPrice() {
      return this.cartList.filter(item => item.checked === true).reduce((total,val) => {
        return total += val.checked? (val.sku.nowprice/100)*val.count: 0;
      },0)
    },
    isCheckedAll() {
      if(this.cartList.length === 0) {
        return false
      }
      for(let item of this.cartList) {
        if(item.checked ===false) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    checkAll() {
      if(this.isCheckedAll) {
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    },

    countPrice() {
      if(this.calcCount === 0 ) {
        this.$toast.show("请添加商品");
      }
    }
  },
}
</script>
<style scoped>
.cart-bottom-bar {
  width: 100%;
  display: flex;
  background-color: #eee;
  align-items: center;
  height: 40px;
  font-size: 15px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  border-bottom: 1px solid #dddddd;
}
.check-all {
  width: 24%;
  display: flex;
  justify-content: center;
}
.count-all {
  flex: 1;
}
.calculate {
  width: 30%;
  text-align: center;
  line-height: 40px;
  background-color: #ff4500;
  color: #fff;
}
</style>