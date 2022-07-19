<template>
  <div class="content">
    <div class="slider" @click="handleSliderClick">
      <span
        :class="{
          'slider-item': true,
          'slider-item-active': currentTab === item.tab,
        }"
        v-for="item in sliderList"
        :key="item.name"
        :data-tab="item.tab"
        >{{ item.name }}</span
      >
    </div>
    <div class="prod-list">
      <div class="prod-list-item" v-for="item in contentList" :key="item._id">
        <img :src="`${item.imgUrl}`" alt="" class="item-img" />
        <div class="item-info">
          <span class="item-info-name">{{ item.name }}</span>
          <span class="item-info-sales">月售{{ item.sales }}件</span>
          <p class="item-info-price">
            <span class="item-info-price-new">&yen;{{ item.price }}</span>
            <span class="item-info-price-old">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="item-numbers">
          <span
            class="item-numbers-minus"
            @click="handlePick('minus', paramsID, item)"
            >-</span
          >
          <span class="item-numbers-num">{{
            shopCarList?.[paramsID]?.[item._id]?.count || 0
          }}</span>
          <span
            class="item-numbers-plus"
            @click="handlePick('add', paramsID, item)"
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// slider_list
const sliderList = reactive([{
  name: '全部商品',
  tab: 'all'
},
{
  name: '秒杀',
  tab: 'spike'
},
{
  name: '新鲜水果',
  tab: 'freshFruits'
},
{
  name: '休闲食品',
  tab: 'snackFoods'
},
{
  name: '时令蔬菜',
  tab: 'seasonalVegetables'
},
{
  name: '肉蛋家禽',
  tab: 'meatEggs'
}])

// 处理tab切换的相关逻辑
const useTabEffect = () => {
  // 当前slider tab
  const currentTab = ref('all')
  const handleSliderClick = (event) => {
    const { target: { dataset: { tab }, nodeName } } = event
    if (nodeName === 'SPAN') {
      // 切换之后改变当前currentTab的值
      currentTab.value = tab
    }
  }
  return { currentTab, handleSliderClick }
}

// 获取当前tab下所有商品信息数据
const useCurrentListEffect = (currentTab, paramsID) => {
  const detailsData = reactive({ contentList: [] })
  const getDetailsData = async () => {
    const res = await get(`/api/shop/${paramsID}/products`, {
      tab: currentTab.value
    })
    if (res?.errno === 0 && res?.data) {
      detailsData.contentList = res?.data
    }
  }
  const { contentList } = toRefs(detailsData)
  // 监听函数  如果函数中的依赖发生改变那么就会执行（第一次也会执行）
  watchEffect(() => { getDetailsData() })
  return { contentList }
}

// 选购商品功能（增加或移除）
const useHandlePickProdsEffect = () => {
  const store = useStore()
  const { shopCarList } = toRefs(store.state)
  const handlePick = (type, paramsID, itemInfo) => {
    store.commit('handlePickItemToCar', { type, paramsID, itemInfo })
  }
  return { shopCarList, handlePick }
}

export default {
  name: 'ContentView',
  setup() {
    // 当前路由信息
    const route = useRoute()
    // 页面id参数
    const paramsID = route?.params?.id
    const { currentTab, handleSliderClick } = useTabEffect()
    // 获取页面商品信息
    const { contentList } = useCurrentListEffect(currentTab, paramsID)
    // 选购商品
    const { shopCarList, handlePick } = useHandlePickProdsEffect()
    return { contentList, handleSliderClick, currentTab, sliderList, handlePick, shopCarList, paramsID }
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-width: 3.65rem;
  display: flex;
  position: absolute;
  top: 1.62rem;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  overflow-y: hidden;
  .slider {
    display: flex;
    flex-direction: column;
    width: 0.76rem;
    background: #f5f5f5;
    border-radius: 0.02rem;
    margin-right: 0.16rem;
    overflow-y: auto;
    &-item {
      width: 100%;
      height: 0.4rem;
      font-size: 0.14rem;
      text-align: center;
      color: $content-fontcolor;
      line-height: 0.4rem;
      &:hover,
      &-active {
        background: #ffffff;
      }
    }
  }
  .prod-list {
    flex: 1;
    overflow-y: auto;
    &-item {
      position: relative;
      display: flex;
      border-bottom: 0.01rem solid #f1f1f1;
      padding: 0 0.12rem 0.12rem 0;
      .item-img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      .item-info {
        display: flex;
        flex-direction: column;
        color: $content-fontcolor;
        font-size: 0.14rem;
        overflow: hidden;
        &-name {
          font-weight: bold;
          min-width: 1rem;
          @include ellipsis;
        }
        &-sales {
          font-size: 0.12rem;
          line-height: 0.16rem;
          margin: 0.06rem 0;
        }
        &-price {
          line-height: 0.2rem;
          &-new {
            color: #e93b3b;
          }
          &-old {
            margin-left: 0.1rem;
            text-decoration: line-through;
            font-size: 0.1rem;
            color: #999999;
          }
        }
      }
      .item-numbers {
        position: absolute;
        right: 0.12rem;
        bottom: 0.12rem;
        &-minus,
        &-plus {
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.16rem;
          font-size: 0.2rem;
          border-radius: 50%;
          text-align: center;
        }
        &-minus {
          border: 0.01rem solid #666;
          color: #666;
          margin-right: 0.05rem;
        }
        &-plus {
          border: 0.01rem solid #0091ff;
          background: #0091ff;
          color: #fff;
          margin-left: 0.05rem;
        }
      }
    }
  }
}
</style>
