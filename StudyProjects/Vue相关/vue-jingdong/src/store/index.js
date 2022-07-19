import { createStore } from 'vuex'

export default createStore({
  state: {
    // 购物车数据结构
    // 第一层是商铺的id表示是当前商铺下的商品信息
    // 第二层是商品基本信息以及选购数量
    shopCarList: {}
  },
  getters: {
  },
  mutations: {
    // 添加商品进购物车\删减商品从购物车
    handlePickItemToCar(state, pyload) {
      const shopCarList = state.shopCarList
      const { type, paramsID, itemInfo } = pyload
      let shopInfo = shopCarList[paramsID]
      if (!shopInfo) { shopInfo = {} }
      let prodInfo = shopInfo[itemInfo._id]
      if (type === 'add') {
        if (!prodInfo) {
          prodInfo = itemInfo
          prodInfo.count = 0
        }
        prodInfo.count++
        shopInfo[itemInfo._id] = prodInfo
      } else {
        if (prodInfo) {
          if (prodInfo.count === 1) {
            delete shopInfo[itemInfo._id]
          } else {
            shopInfo[itemInfo._id] = prodInfo
            prodInfo.count--
          }
        }
      }
      shopCarList[paramsID] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
