<template>
  <!-- 内容区域 -->
  <div class="wrapper">
    <!-- 顶部位置定位 -->
    <div class="position" id="position">
      <i class="iconfont icon-ditu_dingwei_o"></i>
      <span
        class="position__text">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont icon-lingdang"></i>
    </div>
  </div>
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

<style lang="scss">
  @import url('./style/viriable.scss');
  // @import url('./style/mixins.scss');

  @mixin ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: .51rem;
    padding: 0 .18rem;

    .position {
      padding: .16rem 0;
      line-height: 0.22rem;
      font-size: .16rem;
      display: flex;
      align-items: center;

      .iconfont {
        font-size: .2rem;
      }

      .iconfont.icon-ditu_dingwei_o {
        position: relative;
        top: .01rem;
        margin-right: .05rem;
      }

      .iconfont.icon-lingdang {
        position: relative;
        top: .01rem;
      }

      &__text {
        @include ellipsis;
        padding-right: .20rem;
      }
    }
  }

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
