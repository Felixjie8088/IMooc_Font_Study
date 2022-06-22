<template>
  <!-- 内容区域 -->
  <div class="wrapper">
  <StaticPart />
  <!-- 附近店铺 -->
  <NearBy />
  </div>
  <!-- 底部菜单栏 -->
  <Footer />
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearBy.vue'
import Footer from './Footer.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearBy, Footer }
}
</script>

<style lang="scss">
  // 居中样式
  .center {
    margin: 0 .18rem;
  }

  .wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: .65rem;
  }
</style>
