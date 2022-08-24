<template>
  <!-- 底部菜单栏 -->
  <div class="footer">
    <router-link v-for="item in footerMenus" :key="item.text" :to="item.to">
      <div :class="{ footer__item: true, 'footer__item--active': item.active }">
        <div :class="[{ iconfont: true }, item.className]"></div>
        <div class="footer__text">{{ item.text }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'FooterView',
  setup() {
    const route = useRoute()
    console.log(route)
    const footerMenus = [
      { className: 'icon-gouwudai', text: '首页', to: { name: 'HomeView' }, active: route.name === 'HomeView' },
      { className: 'icon-home', text: '购物车', to: { name: 'ShopCarList' }, active: route.name === 'ShopCarList' },
      { className: 'icon-dingdanguanli', text: '订单', to: { name: 'OrderView' }, active: route.name === 'OrderView' },
      { className: 'icon-wode', text: '我的', to: { name: 'PersonalCenter' }, active: route.name === 'PersonalCenter' }
    ]
    return { footerMenus }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border: 0.01rem solid #f1f1f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -0.01remx 0.01rem 0 #f1f1f1;
  padding: 0 0.18rem;
  box-sizing: border-box;

  a {
    color: $content-fontcolor;
    text-decoration: none;
  }
  &__text {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }

  &__item {
    display: flex;
    min-width: 0.4rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: $content-fontcolor;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
