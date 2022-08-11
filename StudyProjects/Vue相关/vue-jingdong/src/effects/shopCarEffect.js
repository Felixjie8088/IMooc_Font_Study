import { computed, toRefs } from 'vue'
import { useStore } from 'vuex'
// 选购商品功能（增加或移除）
export const useHandlePickProdsEffect = (shopID) => {
  const store = useStore()
  const { shopCarList } = toRefs(store.state)
  const handlePick = (type, paramsID, shopName, itemInfo) => {
    store.commit('handlePickItemToCar', { type, paramsID, shopName, itemInfo })
  }
  // 当前商铺中的购物车种的商品信息
  const productList = computed(() => {
    const prodList = store.state.shopCarList?.[shopID]?.productList || {}
    return prodList
  })
  // 当前商铺中的购物车种的商品信息
  const shopName = computed(() => {
    const shopName = store.state.shopCarList?.[shopID]?.shopName || ''
    return shopName
  })
  // 计算商品属性
  const ComputeProd = computed(() => {
    const result = { totalCount: 0, totalAmount: 0 }
    const prodList = store.state.shopCarList?.[shopID]?.productList || {}
    if (prodList) {
      for (const i in prodList) {
        result.totalCount += (prodList[i].count || 0)
        // 只有选中的状态才计算金额
        result.totalAmount += (prodList[i].count || 0) * (prodList[i].price || 0)
      }
    }
    result.totalAmount = result.totalAmount.toFixed(2)
    return result
  })
  return { shopCarList, shopName, ComputeProd, productList, handlePick }
}
