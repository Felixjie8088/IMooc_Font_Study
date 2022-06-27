<template>
  <!-- 附近店铺 -->
  <div class="nearby-shops center">
    <p class="title">附近店铺</p>
    <ul class="store-list">
      <li v-for="item in storeList" :key="item.storeName" class="store-item">
        <img
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgUrl}.png`"
          alt=""
          class="store-item-icon"
        />
        <div class="store-item-info">
          <p class="info-store-name">{{ item.storeName }}</p>
          <p class="info-store-cost">
            <span
              v-for="(cost, index) in item.costInfo"
              :key="index"
              class="info-store-cost-text"
              >{{ cost }}</span
            >
          </p>
          <p class="info-store-promotions">
            {{ item.promotions }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup() {
    const storeList = [
      {
        imgUrl: 'near',
        storeName: '沃尔玛',
        costInfo: ['月售1万+', '起送￥0', '基础运费￥5'],
        promotions: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'near',
        storeName: '山姆会员商店',
        costInfo: ['月售2千+', '起送￥0', '基础运费￥5'],
        promotions: '联合利华洗护满10减5'
      }
    ]
    return { storeList }
  }
}
</script>

<style lang="scss" scoped>
// 附近店铺
.nearby-shops {
  .title {
    font-size: 0.18rem;
    margin: 0.16rem 0 0.14rem 0;
    color: $content-fontcolor;
  }

  // 店铺列表
  .store-list {
    list-style: none;
    padding: 0;

    .store-item {
      display: flex;
      margin-bottom: 0.12rem;

      // 店铺logo
      &-icon {
        background: #b7b7b7;
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.16rem;
      }

      // 店铺信息
      &-info {
        flex-grow: 1;
        border-bottom: 0.01rem solid #f1f1f1;

        // 店铺名称
        .info-store-name {
          height: 0.22rem;
          font-size: 0.16rem;
          color: $content-fontcolor;
        }

        // 店铺基础费用信息
        .info-store-cost {
          height: 0.18rem;
          margin: 0.08rem 0;

          &-text {
            font-size: 0.13rem;
            color: $content-fontcolor;
            margin-right: 0.16rem;
          }
        }
        // 店铺优惠
        .info-store-promotions {
          margin-bottom: 0.12rem;
          height: 0.18rem;
          font-size: 0.13rem;
          color: #e93b3b;
        }
      }
    }
  }
}
</style>
