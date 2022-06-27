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
import Footer from './Footer.vue'
import NearBy from './NearBy.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearBy, Footer }
}
</script>

<!-- scoped css作用域约束 -->
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.65rem;
}
</style>
