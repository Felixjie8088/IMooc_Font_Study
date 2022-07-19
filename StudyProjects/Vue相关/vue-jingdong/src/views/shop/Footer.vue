<template>
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
export default {
  name: 'FooterView',
  setup() {
    const store = useStore()
    const route = useRoute()
    const shopCarList = store.state.shopCarList
    const shopID = route.params.id
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

    const totalAmount = computed(() => {
      let Amount = 0
      const prodList = shopCarList[shopID]
      if (prodList) {
        for (const i in prodList) {
          Amount += (prodList[i].count || 0) * (prodList[i].price || 0)
        }
      }
      return Amount.toFixed(2)
    })

    return { totalCount, totalAmount }
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
</style>
