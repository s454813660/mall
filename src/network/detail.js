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
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class Params {
  constructor(desc, size, parameter) {
    if(desc){
      this.desc = desc
    }
    this.size = size
    this.parameter = parameter
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goodsCate = shopInfo.cGoods
    this.score = shopInfo.score
  }
}