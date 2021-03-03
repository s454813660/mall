import { ADD_COUNT, ADD_TO_CART } from "./mutations-type";

export default {
	[ADD_COUNT](state, payload) {
		for (let i = 0; i < state.cartList.length; i++) {
			if (state.cartList[i].sku.stockId === payload.sku.stockId) {
				state.cartList[i].count += payload.count;
			}
		}
		// payload.count += payload.count
	},
	[ADD_TO_CART](state, payload) {
		payload.checked = true;
		state.cartList.push(payload);
	}
};
