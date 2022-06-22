<template>
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
    <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
  </div>
  <!-- 图标菜单列表 -->
  <nav class="nav__list center">
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/超市.png" alt="">
      <span class="nav__item__text">超市便利</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/菜市场.png" alt="">
      <span class="nav__item__text">菜市场</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/水果店.png" alt="">
      <span class="nav__item__text">水果店</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/鲜花.png" alt="">
      <span class="nav__item__text">鲜花绿植</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/医药健康.png" alt="">
      <span class="nav__item__text">医药健康</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/家居.png" alt="">
      <span class="nav__item__text">家居时尚</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/蛋糕.png" alt="">
      <span class="nav__item__text">烘焙蛋糕</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/签到.png" alt="">
      <span class="nav__item__text">签到</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/大牌免运.png" alt="">
      <span class="nav__item__text">大牌免运</span>
    </div>
    <div class="nav__item">
      <img class="nav__item__icon" src="../../style/assets/红包.png" alt="">
      <span class="nav__item__text">红包套餐</span>
    </div>
  </nav>
  <!-- 分隔线 -->
  <div class="split__line"></div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
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
      padding-top: .12rem;
      height: 0;
      overflow: hidden;
      padding-bottom: 25.4%;

      img {
        width: 100%;
      }
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
</style>
