<template>
  <div>
    <input type="text" v-model="inputValue">
    <button @click="handleClick">提交</button>
  </div>
  <ul>
    <!--    <li v-for="(item,index) in list" :key="index" @click="handleDeleteItem(index)">{{ item }}</li>-->
    <list-item v-for="(item,index) in list" :key="index" @click="handleDeleteItem(index)" :msg="item"/>
  </ul>
</template>

<script>
import {reactive, ref} from "vue";
import ListItem from "@/components/ListItem";

export default {
  name: 'App',
  components: {ListItem},
  setup() {
    const list = reactive([]);
    const inputValue = ref('');
    const handleClick = () => {
      list.push(inputValue.value);
      inputValue.value = '';
    };
    const handleDeleteItem = (index) => {
      list.splice(index, 1);
    };
    return {inputValue, list, handleClick, handleDeleteItem}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
