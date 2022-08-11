<template>
  <div class="wrapper">
    <div class="top">
      <!-- 标题 -->
      <div class="top-header">
        <!-- 返回按钮 -->
        <i
          class="top-header-back iconfont icon-zuojiantou"
          @click="handleBack"
        ></i>
        <span class="top-header-text">确认订单</span>
      </div>
      <div class="top-revicer">
        <div class="top-revicer-title">收货地址</div>
        <div class="top-revicer-address">北京理工大学国防科技园2号楼10层</div>
        <div class="top-revicer-info">
          <span class="info-name">瑶妹（先生）</span>
          <span class="info-phone">18911024266</span>
        </div>
        <i class="top-revicer-enter iconfont icon-zuojiantou"></i>
      </div>
    </div>
    <div class="shopList">
      <!-- 商铺信息 -->
      <div class="shopInfo">
        <!-- 商铺内容 -->
        <div class="item-name">{{ shopName }}</div>
        <!-- 商铺购物车商品详细信息 -->
        <div
          class="item-prod-info"
          v-for="(prodItem, pid) in productList"
          :key="prodItem._id"
          v-show="pid < 3"
        >
          <!-- 商品图片展示 -->
          <img :src="`${prodItem.imgUrl}`" alt="" class="info-img" />
          <!-- 商品基本信息以及数量 -->
          <div class="info-detail">
            <div class="info-detail-prodName">{{ prodItem.name }}</div>
            <div class="info-detail-prodPrice">
              &yen;{{ prodItem.price }} x {{ prodItem.count }}
            </div>
          </div>
          <!-- 每个商品的总价 -->
          <div class="info-totalPrice">
            &yen;{{ prodItem.price * prodItem.count }}
          </div>
        </div>
        <div class="item-totalInfo" v-if="ComputeProd.totalCount > 2">
          共计{{ ComputeProd.totalCount }}件/1.4kg
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-text">
        实付金额
        <span class="footer-text-money"
          >&yen;{{ ComputeProd.totalAmount }}</span
        >
      </div>
      <div class="footer-submit">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useHandlePickProdsEffect } from '@/effects/shopCarEffect'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'OrderComfirm',
  setup() {
    const router = useRouter()
    // 当前路由信息
    const route = useRoute()
    // 页面id参数
    const shopID = route?.params?.id
    // console.log(route)
    // console.log(shopID)
    const { productList, shopName, ComputeProd } = useHandlePickProdsEffect(shopID)

    // 返回按钮
    const handleBack = () => {
      router.back()
    }
    // const shopCarList = reactive([{
    //   shopID: 1,
    //   shopName: '沃尔玛',
    //   prodList: [{ prodID: '1-1', imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png', name: '番茄250g/份', price: 33.6, count: 3 }, { prodID: '1-2', imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png', name: '车厘子250g/份', price: 33.6, count: 3 }, { prodID: '1-3', imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png', name: '橙子250g/份', price: 20.6, count: 2 }
    //   ],
    //   totalPrice: 242.8
    // }, {
    //   shopID: 2,
    //   shopName: '京东7FRESH七鲜',
    //   prodList: [{ prodID: '1-1', imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png', name: '番茄250g/份', price: 33.6, count: 3 }, { prodID: '1-2', imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png', name: '提车厘子250g/份', price: 33.6, count: 3 }],
    //   totalPrice: 201.6
    // }, {
    //   shopID: 2,
    //   shopName: '百果园',
    //   prodList: [{ prodID: '1-1', imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png', name: '番茄250g/份', price: 33.6, count: 3 }],
    //   totalPrice: 100.8
    // }])
    return { shopName, productList, ComputeProd, handleBack }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &-header {
    position: relative;
    padding-top: 0.25rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    &-back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
    &-text {
      font-size: 0.16rem;
    }
  }
  &-revicer {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 0.8rem;
    background: #fff;
    border-radius: 0.04rem;
    padding: 0.16rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
    &-title {
      line-height: 0.22rem;
    }
    &-address {
      line-height: 0.2rem;
      font-size: 0.14rem;
      margin: 0.14rem 0 0.06rem 0;
      padding-right: 0.4rem;
    }
    &-info {
      color: #666;
      font-size: 0.12rem;
      line-height: 0.17rem;
      .info-name {
        margin-right: 0.06rem;
      }
    }
    &-enter {
      position: absolute;
      top: 50%;
      right: 0.16rem;
      transform: translateY(-50%) rotate(180deg);
      color: #666;
      font-size: 0.2rem;
    }
  }
}
// 商铺列表
.shopList {
  position: absolute;
  top: 1.96rem;
  left: 0.18rem;
  right: 0.18rem;
  overflow-y: auto;
  // 商铺内容
  .shopInfo {
    margin-top: 0.16rem;
    padding: 0.16rem;
    background: #fff;
    // 商铺名称
    .item-name {
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    // 商铺中商品信息
    .item-prod-info {
      margin-top: 0.16rem;
      display: flex;
      justify-content: space-between;
      // 商品图片
      .info-img {
        width: 0.46rem;
        height: 0.46rem;
        margin-right: 0.16rem;
      }
      // 商品详细信息
      .info-detail {
        flex-grow: 1;
        &-prodName {
          font-size: 0.14rem;
          color: $content-fontcolor;
          margin-bottom: 0.06rem;
        }
        // 商品价格以及数量
        &-prodPrice {
          font-size: 0.2rem;
          color: #e93b3b;
          transform: scale(0.5);
          transform-origin: left center;
        }
      }
      // 商品总价
      .info-totalPrice {
        font-size: 0.14rem;
        line-height: 0.27rem;
        align-self: flex-end;
        color: #000;
      }
    }
    // 剩余商品展示以及商品数量重量总计
    .item-totalInfo {
      position: relative;
      height: 0.28rem;
      background: #f5f5f5;
      font-size: 0.14rem;
      color: #999;
      text-align: center;
      line-height: 0.28rem;
      margin-top: 0.16rem;
      &::after {
        content: "";
        border: 0.1rem solid transparent;
        border-top: 0.1rem solid #999;
        position: absolute;
        top: 50%;
        left: 67%;
        transform: translateY(-25%);
      }
      &-active::after {
        transform: rotate(180deg);
        transform-origin: 50% 16%;
      }
    }
  }
}
// 底部footer
.footer {
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  background: #fff;
  font-size: 0.14rem;
  color: #333333;
  line-height: 0.5rem;
  &-text {
    padding-left: 0.24rem;
    &-money {
      font-size: 0.16rem;
      font-weight: bold;
    }
  }
  &-submit {
    width: 0.98rem;
    background: #4fb0f9;
    color: #fff;
    text-align: center;
  }
}
</style>
