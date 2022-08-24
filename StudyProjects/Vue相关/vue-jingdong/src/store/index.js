import { createStore } from 'vuex'

const setLocalShopCarList = (state) => {
  const { shopCarList } = state
  const shopCarListStr = JSON.stringify(shopCarList)
  if (shopCarListStr === '{}') {
    localStorage.removeItem('shopCarList')
  } else {
    localStorage.shopCarList = shopCarListStr
  }
}

const getLocalShopCarList = () => {
  return localStorage.shopCarList === undefined ? {} : JSON.parse(localStorage.shopCarList)
}

export default createStore({
  state: {
    // 购物车数据结构
    // 第一层是商铺的id表示是当前商铺下的商品信息
    // 第二层是商品基本信息以及选购数量
    shopCarList: getLocalShopCarList()
  },
  getters: {
  },
  mutations: {
    // 添加商品进购物车\删减商品从购物车
    handlePickItemToCar (state, pyload) {
      const shopCarList = state.shopCarList
      const { type, paramsID, shopName, itemInfo } = pyload
      const shopInfo = shopCarList[paramsID] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      let prodInfo = shopInfo.productList[itemInfo._id]
      if (type === 'add') {
        if (!prodInfo) {
          prodInfo = itemInfo
          prodInfo.count = 0
        }
        prodInfo.checked = true
        prodInfo.count++
        shopInfo.productList[itemInfo._id] = prodInfo
      } else {
        if (prodInfo) {
          if (prodInfo.count === 1) {
            delete shopInfo.productList[itemInfo._id]
          } else {
            shopInfo.productList[itemInfo._id] = prodInfo
            prodInfo.count--
          }
        }
      }
      shopCarList[paramsID] = shopInfo
      setLocalShopCarList(state)
    },
    // 切换商品数据是否选中
    changeProdItemCheckd (state, pyload) {
      const shopCarList = state.shopCarList
      const { shopID, prodID } = pyload
      const shopInfo = shopCarList[shopID]
      const prodInfo = shopInfo.productList[prodID]
      prodInfo.checked = !prodInfo.checked
      setLocalShopCarList(state)
    },
    // 清空购物车
    clearShopCar (state, pyload) {
      delete state.shopCarList[pyload.shopID]
      setLocalShopCarList(state)
    },
    // 设置全选
    setAllChecked (state, pyload) {
      const shopCarList = state.shopCarList
      const { shopID, allChecked } = pyload
      const shopInfo = shopCarList[shopID] || { shopName: '', productList: {} }
      for (const i in shopInfo.productList) {
        shopInfo.productList[i].checked = !allChecked
      }
      setLocalShopCarList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
