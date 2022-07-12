<template>
  <!-- 附近店铺 -->
  <div class="nearby-shops center">
    <p class="title">附近店铺</p>
    <router-link
      :to="`/shop/${item._id}`"
      v-for="item in storeList"
      :key="item._id"
    >
      <ShopInfo :shopInfo="item" />
    </router-link>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo.vue'
import { get } from '@/utils/request'
import { ref } from 'vue'

const useNearByListEffect = () => {
  const storeList = ref([])
  const handleGetData = async () => {
    try {
      const response = await get('/api/shop/hot-list')
      console.log(response)
      if (response?.errno === 0 && response?.data?.length) {
        storeList.value = response?.data
      }
    } catch (e) {
    }
  }
  return { storeList, handleGetData }
}
export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup() {
    const { storeList, handleGetData } = useNearByListEffect()
    handleGetData()
    return { storeList }
  }
}
</script>

<style lang="scss" scoped>
// 附近店铺
.nearby-shops {
  .title {
    font-size: 0.18rem;
    margin: 0.16rem 0 0.14rem 0;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
