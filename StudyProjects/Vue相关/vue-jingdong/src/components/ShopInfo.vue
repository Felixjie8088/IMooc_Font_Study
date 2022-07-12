<template>
  <div class="shop">
    <img :src="`${shopInfo.imgUrl}`" alt="" class="shop-icon" />
    <div :class="`shop-info ${hideBorder ? '' : 'shop-info-hideBorder'}`">
      <p class="shop-info-name">{{ shopInfo.name }}</p>
      <p class="shop-info-cost">
        <span class="shop-info-cost-text">月售{{ shopInfo.sales }}+</span>
        <span class="shop-info-cost-text"
          >起送￥{{ shopInfo.expressLimit }}</span
        >
        <span class="shop-info-cost-text"
          >基础运费￥{{ shopInfo.expressPrice }}</span
        >
      </p>
      <p class="shop-info-promotions">
        {{ shopInfo.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object
    },
    hideBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  margin-bottom: 0.12rem;

  // 店铺logo
  &-icon {
    background: #b7b7b7;
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  // info底部边框
  &-info-hideBorder {
    border-bottom: 0.01rem solid #f1f1f1;
  }
  // 店铺信息
  &-info {
    flex-grow: 1;

    // 店铺名称
    &-name {
      height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }

    // 店铺基础费用信息
    &-cost {
      height: 0.18rem;
      margin: 0.08rem 0;

      &-text {
        font-size: 0.13rem;
        color: $content-fontcolor;
        margin-right: 0.16rem;
      }
    }
    // 店铺优惠
    &-promotions {
      margin-bottom: 0.12rem;
      height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
