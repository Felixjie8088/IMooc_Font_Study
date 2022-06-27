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
    <input
      type="text"
      class="search__box"
      id="searchcontent"
      placeholder="山姆会员商店优惠商品"
    />
  </div>
  <!-- swiper 轮播图 -->
  <div class="swiper center">
    <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" />
  </div>
  <!-- 图标菜单列表 -->
  <nav class="nav__list center">
    <div v-for="item in navList" :key="item.text" class="nav__item">
      <img
        class="nav__item__icon"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        alt=""
      />
      <span class="nav__item__text">{{ item.text }}</span>
    </div>
  </nav>
  <!-- 分隔线 -->
  <div class="split__line"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const navList = [
      {
        imgName: '超市',
        text: '超市便利'
      },
      {
        imgName: '菜市场',
        text: '菜市场'
      },
      {
        imgName: '水果店',
        text: '水果店'
      },
      {
        imgName: '鲜花',
        text: '鲜花绿植'
      },
      {
        imgName: '医药健康',
        text: '医药健康'
      },
      {
        imgName: '家居',
        text: '家居时尚'
      },
      {
        imgName: '蛋糕',
        text: '烘焙蛋糕'
      },
      {
        imgName: '签到',
        text: '签到'
      },
      {
        imgName: '大牌免运',
        text: '大牌免运'
      },
      {
        imgName: '红包',
        text: '红包套餐'
      }
    ]
    return { navList }
  }
}
</script>

<style lang="scss" scoped>
// 位置定位
.position {
  padding: 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  display: flex;
  align-items: center;

  .iconfont {
    font-size: 0.2rem;
  }

  .iconfont.icon-ditu_dingwei_o {
    position: relative;
    top: 0.01rem;
    margin-right: 0.05rem;
  }

  .iconfont.icon-lingdang {
    position: absolute;
    right: 0.18rem;
    top: 0.18rem;
  }

  &__text {
    padding-right: 0.2rem;
    @include ellipsis;
    color: $content-fontcolor;
  }
}

// 搜索框
.search {
  position: relative;
  display: flex;
  width: 3.39rem;
  height: 0.32rem;
  line-height: 0.32rem;

  &__box {
    padding: 0;
    width: 100%;
    height: 0.32rem;
    background: #f5f5f5;
    border: 0 solid rgba(0, 0, 0, 0);
    border-radius: 0.16rem;
    outline: none;

    &::-webkit-input-placeholder {
      padding-left: 0.44rem;
      color: #b7b7b7;
      font-size: 0.14rem;
      line-height: 0.16rem;
    }
  }

  .icon-search {
    position: absolute;
    color: #b7b7b7;
    font-size: 0.16rem;
    left: 0.16rem;
  }
}

// 轮播图
.swiper {
  padding-top: 0.12rem;
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
  padding: 0.16rem 0.08rem 0 0.08rem;

  .nav__item {
    display: flex;
    width: 20%;
    min-width: 0.48rem;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.16rem;

    &__icon {
      width: 0.4rem;
      height: 0.4rem;
      margin-bottom: 0.06rem;
    }

    &__text {
      color: $content-fontcolor;
    }
  }
}

// 分隔线
.split__line {
  height: 0.1rem;
  background: #f1f1f1;
}
</style>
