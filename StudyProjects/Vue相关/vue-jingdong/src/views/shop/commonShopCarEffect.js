import { toRefs } from 'vue'
import { useStore } from 'vuex'
// 选购商品功能（增加或移除）
export const useHandlePickProdsEffect = () => {
  const store = useStore()
  const { shopCarList } = toRefs(store.state)
  const handlePick = (type, paramsID, itemInfo) => {
    store.commit('handlePickItemToCar', { type, paramsID, itemInfo })
  }
  return { shopCarList, handlePick }
}
