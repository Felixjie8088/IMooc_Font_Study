import {createStore} from 'vuex'
// Vuex 数据管理框架
// Vuex 创建了一个全局唯一的仓库，用来存放全局的数据
export default createStore({
  state: {
    name: 'felix'
  },
  getters: {},
  mutations: {
    // 第四步，对应的mutation被执行
    change() {
      // 第五步，在这里修改state里面的数据
      console.log('mutation-change');
      this.state.name = 'ying';
    }
  },
  actions: {
    // 第二步，store感知到你触发了一个叫做changeName的action，执行changeName方法
    changeName() {
      // 第三步，提交一个commit，触发一个mutation
      console.log('action-change');
      this.commit('change');
    }
  },
  modules: {}
})
