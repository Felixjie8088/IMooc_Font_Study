<template>
  <div class="Content">
    <!-- 标题 -->
    <div class="Content-title">我的全部购物车（2）</div>
    <!-- 购物车列表 -->
    <div class="Content-itemList">
      <!-- 商铺信息 -->
      <div
        class="Content-itemList-item"
        v-for="(shopItem, shopID) in shopCarList"
        :key="shopID"
      >
        <!-- 商铺内容 -->
        <div class="item-name">{{ shopItem.shopName }}</div>
        <!-- 商铺购物车商品详细信息 -->
        <div
          class="item-prod-info"
          v-for="prodItem in shopItem.productList"
          :key="prodItem._id"
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
          <div class="info-totalPrice">&yen;{{ (prodItem.price * prodItem.count).toFixed(2) }}</div>
        </div>
        <!-- <div class="item-totalInfo" v-if="shopItem.productList.length > 2">
          共计{{ shopItem.productList.length }}件/1.4kg
        </div> -->
      </div>
    </div>
  </div>
  <!-- 底部菜单栏 -->
  <Footer />
</template>

<script>
import { useStore } from 'vuex'
import Footer from '../home/Footer'
export default {
  name: 'ShopCarList',
  components: { Footer },
  setup() {
    const store = useStore()
    const { shopCarList } = store.state
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
    return { shopCarList }
  }
}
</script>

<style lang="scss" scoped>
.Content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  // 标题
  &-title {
    height: 0.44rem;
    background: #fff;
    font-size: 0.16rem;
    color: $content-fontcolor;
    text-align: center;
    line-height: 0.44rem;
  }
  // 商铺内容
  &-itemList {
    position: absolute;
    top: 0.44rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    background: #f5f5f5;
    padding: 0 0.18rem 0.2rem 0.18rem;
    overflow-y: auto;
    // 商铺中商品信息
    &-item {
      background: #fff;
      margin-top: 0.16rem;
      padding: 0.16rem;
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
}
</style>
