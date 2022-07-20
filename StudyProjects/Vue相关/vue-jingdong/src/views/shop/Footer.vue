<template>
  <div class="prod-list">
    <div class="prod-list-header">
      <i
        :class="{
          'header-all': true,
          iconfont: true,
        }"
        @click="handleChecked(shopID, item._id)"
        >全选</i
      >
      <div
        class="header-clear"
        @click="
          () => {
            handleClearShopCar(shopID);
          }
        "
      >
        清空购物车
      </div>
    </div>
    <div class="prod-list-item" v-for="item in productList" :key="item._id">
      <i
        :class="{
          'item-checked': true,
          iconfont: true,
          'icon-xuanzhongduigou': item.checked,
          'icon-icons-': !item.checked,
        }"
        @click="handleChecked(shopID, item._id)"
      ></i>
      <img :src="`${item.imgUrl}`" alt="" class="item-img" />
      <div class="item-info">
        <span class="item-info-name">{{ item.name }}</span>
        <p class="item-info-price">
          <span class="item-info-price-new">&yen;{{ item.price }}</span>
          <span class="item-info-price-old">&yen;{{ item.oldPrice }}</span>
        </p>
      </div>
      <div class="item-numbers">
        <span
          class="item-numbers-minus"
          @click="handlePick('minus', shopID, item)"
          >-</span
        >
        <span class="item-numbers-num">{{ item.count || 0 }}</span>
        <span class="item-numbers-plus" @click="handlePick('add', shopID, item)"
          >+</span
        >
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-icon">
      <img class="footer-icon-img" src="@/style/assets/basket.png" />
      <div class="footer-icon-num">{{ totalCount }}</div>
    </div>
    <span class="footer-amount">
      总计：<span class="footer-amount-num">&yen;{{ totalAmount }}</span>
    </span>
    <span class="footer-btn-pay">去结算</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useHandlePickProdsEffect } from './commonShopCarEffect'

const useShopCarEffect = (store, shopID) => {
  // 购物车中的信息
  const shopCarList = store.state.shopCarList

  // 计算属性-商品总数
  const totalCount = computed(() => {
    let count = 0
    const prodList = shopCarList[shopID]
    if (prodList) {
      for (const i in prodList) {
        count += (prodList[i].count || 0)
      }
    }
    return count
  })
  // 计算属性-总价
  const totalAmount = computed(() => {
    let Amount = 0
    const prodList = shopCarList[shopID]
    if (prodList) {
      for (const i in prodList) {
        // 只有选中的状态才计算金额
        if (prodList[i].checked) {
          Amount += (prodList[i].count || 0) * (prodList[i].price || 0)
        }
      }
    }
    return Amount.toFixed(2)
  })

  // 当前商铺中的购物车种的商品信息
  const productList = computed(() => {
    const prodList = shopCarList[shopID] || []
    return prodList
  })

  // 选购商品功能（增加或移除）
  const { handlePick } = useHandlePickProdsEffect()
  // 切换选中商品状态
  const handleChecked = (shopID, prodID) => {
    store.commit('changeProdItemCheckd', { shopID, prodID })
  }
  // 清空购物车
  const handleClearShopCar = (shopID) => {
    store.commit('clearShopCar', { shopID })
  }
  return { totalCount, totalAmount, productList, handlePick, handleChecked, handleClearShopCar }
}

export default {
  name: 'FooterView',
  setup() {
    // 当前vuex中管理的数据
    const store = useStore()
    // 当前路由信息
    const route = useRoute()
    // 当前商品的id
    const shopID = route.params.id
    const { totalCount, totalAmount, productList, handlePick, handleChecked, handleClearShopCar } = useShopCarEffect(store, shopID)
    return { totalCount, totalAmount, productList, handlePick, shopID, handleChecked, handleClearShopCar }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  height: 0.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 -0.01rem 0.01rem 0 #f1f1f1;
  &-icon {
    position: relative;
    &-img {
      width: 0.28rem;
      height: 0.26rem;
      margin: 0 0.32rem 0 0.24rem;
    }
    &-num {
      position: absolute;
      padding: 0 0.03rem;
      top: -0.07rem;
      left: 0.5rem;
      min-width: 0.2rem;
      height: 0.2rem;
      background: #e93b3b;
      color: #ffffff;
      border-radius: 0.1rem;
      text-align: center;
      font-size: 0.16rem;
      transform: scale(0.5);
      transform-origin: left center;
      line-height: 0.18rem;
    }
  }
  &-amount {
    flex: 1;
    font-size: 0.12rem;
    color: $content-fontcolor;
    &-num {
      color: #e93b3b;
      font-size: 0.18rem;
    }
  }
  &-btn-pay {
    text-align: center;
    width: 0.98rem;
    height: 100%;
    line-height: 0.5rem;
    font-size: 0.14rem;
    color: #ffffff;
    background: #4fb0f9;
  }
}
.prod-list {
  flex: 1;
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  background: #fff;
  &-header {
    display: flex;
    height: 0.52rem;
    align-items: center;
    border-bottom: 0.01rem solid #f1f1f1;
    .header-all {
      width: 0.64rem;
    }
    .header-clear {
      flex: 1;
      text-align: right;
      font-size: 0.14rem;
      color: $content-fontcolor;
      margin-right: 0.16rem;
    }
  }
  &-item {
    position: relative;
    display: flex;
    border-bottom: 0.01rem solid #f1f1f1;
    padding: 0.12rem;
    .item-checked {
      color: #4fb0f9;
      font-size: 0.2rem;
      line-height: 0.5rem;
      margin-right: 0.15rem;
    }
    .item-img {
      width: 0.46rem;
      height: 0.46rem;
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
      &-price {
        line-height: 0.2rem;
        margin: 0.06rem 0 0 0;
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
</style>
