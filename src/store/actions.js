import { ADD_COUNT, ADD_TO_CART } from "./mutations-type";

export default {
	addCart(context, payload) {
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find(item => {
				if (item.sku.stockId === payload.sku.stockId) {
					return item;
				}
			});
			if (oldProduct) {
				context.commit(ADD_COUNT, payload);
				let count = payload.count;
				resolve("商品数量加" + count);
			} else {
				context.commit(ADD_TO_CART, payload);
				resolve("添加到购物车");
			}
		});
	}
};
