<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 @click="handleClick">{{ myName }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed: {
    myName() {
      return this.$store.state.name;
    }
  },
  methods: {
    handleClick() {
      // 想改变数据，vuex要求第一步必须派发一个action
      this, this.$store.dispatch('changeName');
    }
  }
}
</script>
