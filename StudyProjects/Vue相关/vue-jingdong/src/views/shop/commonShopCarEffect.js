import { toRefs } from 'vue'
import { useStore } from 'vuex'
// 选购商品功能（增加或移除）
export const useHandlePickProdsEffect = () => {
  const store = useStore()
  const { shopCarList } = toRefs(store.state)
  const handlePick = (type, paramsID, shopName, itemInfo) => {
    store.commit('handlePickItemToCar', { type, paramsID, shopName, itemInfo })
  }
  return { shopCarList, handlePick }
}
