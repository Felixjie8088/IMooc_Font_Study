<template>
  <!-- 附近店铺 -->
  <div class="nearby-shops center">
    <p class="title">附近店铺</p>
    <ul class="store-list">
      <li class="store-item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="store-item-icon">
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
</template>

<script>
export default {
  name: 'NearBy'
}
</script>

<style lang="scss">
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
</style>
