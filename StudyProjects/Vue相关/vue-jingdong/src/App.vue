<template>
  <!-- 内容区域 -->
  <div class="wrapper">
    <!-- 顶部位置定位 -->
    <div class="position center" id="position">
      <i class="iconfont icon-ditu_dingwei_o"></i>
      <span class="position__text">北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont icon-lingdang"></i>
    </div>
    <!-- 搜索框 -->
    <div class="search center">
      <i class="iconfont icon-search"></i>
      <input type="text" class="search__box" id="searchcontent" placeholder="山姆会员商店优惠商品">
    </div>
    <!-- swiper 轮播图 -->
    <div class="swiper center">
    </div>
    <!-- 图标菜单列表 -->
    <nav class="nav__list center">
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/超市.png" alt="">
        <span class="nav__item__text">超市便利</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/菜市场.png" alt="">
        <span class="nav__item__text">菜市场</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/水果店.png" alt="">
        <span class="nav__item__text">水果店</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/鲜花.png" alt="">
        <span class="nav__item__text">鲜花绿植</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/医药健康.png" alt="">
        <span class="nav__item__text">医药健康</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/家居.png" alt="">
        <span class="nav__item__text">家居时尚</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/蛋糕.png" alt="">
        <span class="nav__item__text">烘焙蛋糕</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/签到.png" alt="">
        <span class="nav__item__text">签到</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/大牌免运.png" alt="">
        <span class="nav__item__text">大牌免运</span>
      </div>
      <div class="nav__item">
        <img class="nav__item__icon" src="./style/assets/红包.png" alt="">
        <span class="nav__item__text">红包套餐</span>
      </div>
    </nav>
    <!-- 分隔线 -->
    <div class="split__line"></div>
    <!-- 附近店铺 -->
    <div class="nearby-shops center">
      <p class="title">附近店铺</p>
      <ul class="store-list">
        <li class="store-item">
          <img src="" alt="" class="store-item-icon">
          <div class="store-item-info">
            <p class="info-store-name">沃尔玛</p>
            <p class="info-store-cost">
              <span class="info-store-cost-text">月售1万+</span>
              <span class="info-store-cost-text">起送￥0</span>
              <span class="info-store-cost-text">基础运费￥5</span>
            </p>
            <p class="info-store-promotions">VIP尊享满89元减4元运费券（每月3张）</p>
          </div>
        </li>
        <li class="store-item">
          <img src="" alt="" class="store-item-icon">
          <div class="store-item-info">
            <p class="info-store-name">山姆会员商店</p>
            <p class="info-store-cost">
              <span class="info-store-cost-text">月售2千+</span>
              <span class="info-store-cost-text">起送￥0</span>
              <span class="info-store-cost-text">基础运费￥5</span>
            </p>
            <p class="info-store-promotions">联合利华洗护满10减5</p>
          </div>
        </li>
      </ul>
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
  // 居中样式
  .center {
    margin: 0 .18rem;
  }

  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: .51rem;
    overflow: hidden;

    // 位置定位
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
        position: absolute;
        right: .18rem;
        top: .18rem;
      }

      &__text {
        padding-right: .20rem;
        @include ellipsis;
        color: $content-fontcolor;
      }
    }

    // 搜索框
    .search {
      position: relative;
      display: flex;
      width: 3.39rem;
      height: .32rem;
      line-height: .32rem;

      &__box {
        padding: 0;
        width: 100%;
        height: .32rem;
        background: #f5f5f5;
        border: 0 solid rgba(0, 0, 0, 0);
        border-radius: .16rem;
        outline: none;

        &::-webkit-input-placeholder {
          padding-left: .44rem;
          color: #B7B7B7;
          font-size: .14rem;
          line-height: .16rem;
        }
      }

      .icon-search {
        position: absolute;
        color: #B7B7B7;
        font-size: .16rem;
        left: .16rem;
      }
    }

    // 轮播图
    .swiper {
      background: blue;
      margin-top: .12rem;
      height: .86rem;
    }

    // 图标列表
    .nav__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: .16rem .08rem 0 .08rem;

      .nav__item {
        display: flex;
        width: 20%;
        min-width: .48rem;
        flex-direction: column;
        align-items: center;
        margin-bottom: .16rem;

        &__icon {
          width: 0.4rem;
          height: 0.4rem;
          margin-bottom: .06rem;
        }

        &__text {
          color: $content-fontcolor;
        }
      }
    }

    // 分隔线
    .split__line {
      height: .10rem;
      background: #F1F1F1;
    }

    // 附近店铺
    .nearby-shops {
      .title {
        font-size: .18rem;
        margin: .16rem 0 .14rem 0;
        color: $content-fontcolor;
      }

      // 店铺列表
      .store-list {
        list-style: none;
        padding: 0;

        .store-item {
          display: flex;
          margin-bottom: .12rem;

          // 店铺logo
          &-icon {
            background: #B7B7B7;
            width: 0.56rem;
            height: 0.56rem;
            margin-right: .16rem;
          }

          // 店铺信息
          &-info {
            flex-grow: 1;
            border-bottom: .01rem solid #F1F1F1;

            // 店铺名称
            .info-store-name {
              height: 0.22rem;
              font-size: .16rem;
              color: $content-fontcolor;
            }

            // 店铺基础费用信息
            .info-store-cost {
              height: 0.18rem;
              margin: .08rem 0;

              &-text {
                font-size: .13rem;
                color: $content-fontcolor;
                margin-right: .16rem;
              }
            }

            // 店铺优惠
            .info-store-promotions {
              margin-bottom: .12rem;
              height: 0.18rem;
              font-size: .13rem;
              color: #E93B3B;
            }
          }
        }
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
