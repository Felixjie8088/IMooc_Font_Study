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
          <span class="item-numbers-minus">-</span>
          <span class="item-numbers-num">0</span>
          <span class="item-numbers-plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
import { reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'

// 获取商品信息数据
const useGetDetailsDataEffect = () => {
  // 当前路由信息
  const route = useRoute()
  // 页面id参数
  const paramsID = route?.params?.id
  const detailsData = reactive({ contentList: [] })
  const getDetailsData = async (tabType = 'all') => {
    const res = await get(`/api/shop/${paramsID}/products`, {
      tab: tabType
    })
    if (res?.errno === 0 && res?.data) {
      detailsData.contentList = res?.data
    }
  }
  const { contentList } = toRefs(detailsData)
  return { getDetailsData, contentList }
}

export default {
  name: 'ContentView',
  setup() {
    // 当前slider tab
    const currentTab = ref('all')
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
    // 获取页面商品信息
    const { getDetailsData, contentList } = useGetDetailsDataEffect()
    // 加载即获取
    getDetailsData()
    const handleSliderClick = (event) => {
      const { target: { dataset: { tab }, nodeName } } = event
      if (nodeName === 'SPAN') {
        getDetailsData(tab)
        // 切换之后改变当前currentTab的值
        currentTab.value = tab
      }
    }
    return { contentList, handleSliderClick, currentTab, sliderList }
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
  .slider {
    display: flex;
    flex-direction: column;
    width: 0.76rem;
    background: #f5f5f5;
    border-radius: 0.02rem;
    margin-right: 0.16rem;
    overflow-y: scroll;
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
    overflow-y: scroll;
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
