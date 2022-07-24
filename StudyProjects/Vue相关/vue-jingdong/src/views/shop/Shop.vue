<template>
  <div class="wrapper">
    <!-- 搜索框 -->
    <div class="search">
      <i class="search-back iconfont icon-zuojiantou" @click="handleBack"></i>
      <div class="search-content">
        <i class="iconfont icon-search"></i>
        <input
          type="text"
          class="search__box"
          id="searchproducts"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :shopInfo="data.item" :hideBorder="true" v-show="data.item._id" />
    <!-- Content -->
    <Content :shopName="data.item.name" />
    <!-- Footer -->
    <Footer :shopName="data.item.name" />
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo.vue'
import { get } from '@/utils/request'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Content from './Content.vue'
import Footer from './Footer.vue'

const useShopInfoEffect = () => {
  // 当前路由的信息
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route?.params?.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  return { data, getItemData }
}

export default {
  name: 'ShopView',
  components: { ShopInfo, Content, Footer },
  setup() {
    const router = useRouter()
    const { data, getItemData } = useShopInfoEffect()
    // 获取数据
    getItemData()
    // 返回按钮
    const handleBack = () => {
      router.back()
    }
    return { data, handleBack }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // min-width: 3.65rem;
  padding: 0.16rem 0.18rem 0 0.18rem;
  .search {
    display: flex;
    height: 0.32rem;
    line-height: 0.32rem;
    margin-bottom: 0.16rem;
    &-back {
      color: #b6b6b6;
      margin-right: 0.16rem;
      font-size: 0.2rem;
    }
    &-content {
      position: relative;
      width: 100%;
    }
    &__box {
      box-sizing: border-box;
      padding: 0 0.2rem 0 0.44rem;
      width: 100%;
      height: 0.32rem;
      background: #f5f5f5;
      border: 0 solid rgba(0, 0, 0, 0);
      border-radius: 0.16rem;
      color: $content-fontcolor;
      outline: none;
      font-size: 0.14rem;
      line-height: 0.16rem;

      &::-webkit-input-placeholder {
        color: $content-fontcolor;
      }
    }

    .icon-search {
      position: absolute;
      color: #b7b7b7;
      font-size: 0.16rem;
      left: 0.16rem;
    }
  }
}
</style>
