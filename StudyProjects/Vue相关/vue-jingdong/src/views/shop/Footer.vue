<template>
  <div class="footer">
    <img class="footer-img" src="@/style/assets/basket.png" />
    <span class="footer-amount">{{ amountText }}</span>
    <span class="footer-btn-pay">去结算</span>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FooterView',
  setup() {
    const amountText = ref('购物车是空的')
    return { amountText }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  height: 0.49rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 -0.01rem 0.01rem 0 #f1f1f1;
  &-img {
    width: 0.28rem;
    height: 0.26rem;
    margin: 0 0.32rem 0 0.24rem;
  }
  &-amount {
    flex: 1;
    font-size: 0.12rem;
    color: $content-fontcolor;
  }
  &-btn-pay {
    text-align: center;
    width: 0.98rem;
    line-height: 0.49rem;
    font-size: 0.14rem;
    color: #ffffff;
    background: #4fb0f9;
  }
}
</style>
