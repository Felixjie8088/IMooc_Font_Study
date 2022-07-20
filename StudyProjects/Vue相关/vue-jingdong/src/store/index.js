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
        prodInfo.checked = true
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
    },
    // 切换商品数据是否选中
    changeProdItemCheckd(state, pyload) {
      const shopCarList = state.shopCarList
      const { shopID, prodID } = pyload
      const shopInfo = shopCarList[shopID]
      const prodInfo = shopInfo[prodID]
      prodInfo.checked = !prodInfo.checked
    },
    // 清空购物车
    clearShopCar(state, pyload) {
      state.shopCarList[pyload.shopID] = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
