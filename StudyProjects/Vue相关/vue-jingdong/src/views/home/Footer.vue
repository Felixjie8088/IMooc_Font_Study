<template>
  <!-- 底部菜单栏 -->
  <div class="footer">
    <div class="footer__item footer__item--active">
      <i class="iconfont icon-home"></i>
      <div class="footer__text">首页</div>
    </div>
    <div class="footer__item">
      <i class="iconfont icon-gouwudai"></i>
      <div class="footer__text">购物车</div>
    </div>
    <div class="footer__item">
      <i class="iconfont icon-dingdanguanli"></i>
      <div class="footer__text">订单</div>
    </div>
    <div class="footer__item">
      <i class="iconfont icon-wode"></i>
      <div class="footer__text">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style lang="scss">
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border: .01rem solid #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -0.01remx .01rem 0 #F1F1F1;
    padding: 0 .18rem;
    box-sizing: border-box;

    &__text {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
    }

    &__item {
      display: flex;
      min-width: .40rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: $content-fontcolor;

      .iconfont {
        margin: .07rem 0 .02rem 0;
        font-size: .18rem;
      }

      &--active {
        color: #1FA4FC;
      }
    }
  }
</style>
