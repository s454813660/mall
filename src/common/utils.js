//  防抖函数
export function debounce(fn, delay) {
	let timer = null;
	return function(...args) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

//  节流函数
export function throttle(fn, delay) {
	let previous = 0;
	return function(...arsg) {
		let now = new Date();
		if (now - previous >= delay) {
			fn.apply(this, args);
			previous = now;
		}
	};
}

