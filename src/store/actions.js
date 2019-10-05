import { 
  ADD_COUNT,
  ADD_TO_CART
} from './mutations-types'

export default {
	addCart(context, payload) {
		// let oldProduct = null
		// for(let item in this.state.cartList){
		//   if(item.iid === payload.iid){
		//     oldProduct = item
		//   }
		// }
		let oldProduct = context.state.cartList.find(item => {
			if (item.iid === payload.iid) {
				return item;
			}
		});
		//  2.判断oldProoduct
		if (oldProduct) {
			// payload.count += 1
			context.commit(ADD_COUNT, oldProduct);
		} else {
			payload.count = 1;
			// context.state.cartList.push(payload)
			context.commit(ADD_TO_CART, payload);
		}
	}
};
