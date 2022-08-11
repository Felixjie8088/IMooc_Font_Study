<template>
  <div class="Content">
    <!-- 标题 -->
    <div class="Content-title">我的订单</div>
    <!-- 订单列表 -->
    <div class="Content-itemList">
      <!-- 商铺信息 -->
      <div
        class="Content-itemList-item"
        v-for="item in orderList"
        :key="item.shopID"
      >
        <div class="item-title">
          <!-- 商铺名称 -->
          <div class="item-title-name">{{ item.shopName }}</div>
          <!-- 订单状态 -->
          <div class="item-title-status">{{ item.statusName }}</div>
        </div>
        <div class="item-content">
          <!-- 订单商品缩略图 -->
          <div class="item-content-imgs">
            <img
              :src="`${prodItem.imgUrl}`"
              alt=""
              class="info-img"
              v-for="(prodItem, index) in item.prodList"
              :key="prodItem.prodID"
              v-show="index < 4"
            />
          </div>
          <!-- 订单价格以及商品总数量 -->
          <div class="item-content-total">
            <span class="item-total-price"
              >&yen;{{ calculateAttr(item.prodList).totalAmount }}</span
            >
            <span class="item-total-count"
              >共{{ calculateAttr(item.prodList).totalCount }}件</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部菜单栏 -->
  <Footer />
</template>

<script>
import { computed, reactive } from 'vue'
import Footer from '../home/Footer'

// 数据源
const orderList = reactive([{
  shopID: 1,
  shopName: '沃尔玛',
  prodList: [{ prodID: '1-1', imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png', name: '番茄250g/份', price: 33.6, count: 3 }, { prodID: '1-2', imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png', name: '车厘子250g/份', price: 33.6, count: 3 }, { prodID: '1-3', imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png', name: '橙子250g/份', price: 20.6, count: 2 }, { prodID: '1-4', imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png', name: '橙子500g/份', price: 30.6, count: 2 }],
  statusName: '已取消'
}, {
  shopID: 2,
  shopName: '京东7FRESH七鲜',
  prodList: [{ prodID: '1-1', imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png', name: '番茄250g/份', price: 33.6, count: 3 }, { prodID: '1-2', imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png', name: '提车厘子250g/份', price: 33.6, count: 3 }],
  statusName: '已取消'
}])
// 计算属性
const calculateAttr = computed(() => {
  return (prodList) => {
    let totalAmount = 0
    let totalCount = 0
    // Proxy数据用JSON先序列化为字符串，再解析成JSON得到内容数据，进行遍历
    const data = JSON.parse(JSON.stringify(prodList))
    for (const item of data) {
      totalAmount += parseFloat(Number(item.price) * Number(item.count))
      totalCount += Number(item.count)
    }
    return { totalAmount: totalAmount.toFixed(2), totalCount }
  }
})
export default {
  name: 'OrderView',
  components: { Footer },
  setup() {
    return { orderList, calculateAttr }
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
  // 订单列表
  &-itemList {
    position: absolute;
    top: 0.44rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    background: #f5f5f5;
    padding: 0 0.18rem 0.2rem 0.18rem;
    overflow-y: auto;
    // 商铺信息
    &-item {
      background: #fff;
      margin-top: 0.16rem;
      padding: 0.16rem;
      .item-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.16rem;
        // 商铺名称
        &-name {
          font-size: 0.16rem;
          color: $content-fontcolor;
        }
        // 订单状态
        &-status {
          font-size: 0.14rem;
          color: #999999;
        }
      }
      .item-content {
        display: flex;
        justify-content: space-between;
        .info-img {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.12rem;
        }
        &-total {
          span {
            display: block;
          }
          .item-total-price {
            font-size: 0.14rem;
            color: #e93b3b;
            margin-bottom: 0.04rem;
          }
          .item-total-count {
            font-size: 0.12rem;
            color: $content-fontcolor;
            line-height: 0.14rem;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
