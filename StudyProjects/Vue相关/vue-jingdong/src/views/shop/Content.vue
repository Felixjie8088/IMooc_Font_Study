<template>
  <div class="content">
    <div class="slider">
      <span class="slider-item">全部商品</span>
      <span class="slider-item">秒杀</span>
      <span class="slider-item">新鲜水果</span>
      <span class="slider-item">休闲食品</span>
      <span class="slider-item">时令蔬菜</span>
      <span class="slider-item">肉蛋家禽</span>
    </div>
    <div class="prod-list">
      <div class="prod-list-item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/tomato.png"
          alt=""
          class="item-img"
        />
        <div class="item-info">
          <span class="item-info-name">番茄250g/份</span>
          <span class="item-info-sales">月售10件</span>
          <p class="item-info-price">
            <span class="item-info-price-new">&yen;33.6</span>
            <span class="item-info-price-old">&yen;33.6</span>
          </p>
        </div>
        <div class="item-numbers">
          <span class="item-numbers-minus">-</span>
          0
          <span class="item-numbers-plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentView'
}
</script>

<style lang="scss" scoped>
.content {
  min-width: 3.65rem;
  display: flex;
  position: absolute;
  top: 1.62rem;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  .slider {
    display: flex;
    flex-direction: column;
    width: 0.76rem;
    background: #f5f5f5;
    border-radius: 0.02rem;
    margin-right: 0.16rem;
    overflow-y: scroll;
    &-item {
      width: 100%;
      height: 0.4rem;
      font-size: 0.14rem;
      text-align: center;
      color: $content-fontcolor;
      line-height: 0.4rem;
      &:hover,
      &-active {
        background: #ffffff;
      }
    }
  }
  .prod-list {
    flex: 1;
    overflow-y: scroll;
    &-item {
      position: relative;
      display: flex;
      border-bottom: 0.01rem solid #f1f1f1;
      padding-bottom: 0.12rem;
      .item-img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      .item-info {
        display: flex;
        flex-direction: column;
        color: $content-fontcolor;
        font-size: 0.14rem;
        &-name {
          font-weight: bold;
        }
        &-sales {
          font-size: 0.12rem;
          line-height: 0.16rem;
          margin: 0.06rem 0;
        }
        &-price {
          line-height: 0.2rem;
          &-new {
            color: #e93b3b;
          }
          &-old {
            margin-left: 0.1rem;
            text-decoration: line-through;
            font-size: 0.1rem;
            color: #999999;
          }
        }
      }
      .item-numbers {
        position: absolute;
        right: 0;
        bottom: 0.12rem;
        &-minus,
        &-plus {
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.16rem;
          font-size: 0.2rem;
          border-radius: 50%;
          text-align: center;
        }
        &-minus {
          border: 0.01rem solid #666;
          color: #666;
          margin-right: 0.05rem;
        }
        &-plus {
          border: 0.01rem solid #0091ff;
          background: #0091ff;
          color: #fff;
          margin-left: 0.05rem;
        }
      }
    }
  }
}
</style>
