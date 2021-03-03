import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getDetailRecommend() {
  return request({
    url: "/recommend"
  })
}

export class Goods{
	constructor(columns, itemInfo, service) {
		this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.desc = itemInfo.desc;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor
		this.columns = columns;
		this.service = service;
	}
}

export class Shops{
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.sell = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl;
    this.fans = shopInfo.cFans;
  }
}
