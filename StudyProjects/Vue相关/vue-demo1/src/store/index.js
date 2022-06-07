import {createStore} from 'vuex'
import axios from 'axios'
// Vuex 数据管理框架
// Vuex 创建了一个全局唯一的仓库，用来存放全局的数据
export default createStore({
	state: {
		name: 'felix'
	},
	getters: {},
	mutations: {
		// 第四步，对应的mutation被执行
		change(state, msg) {
			// 第五步，在这里修改state里面的数据
			console.log('mutation-change');
			state.name = msg;
		}
	},
	actions: {
		// 第二步，store感知到你触发了一个叫做changeName的action，执行changeName方法
		changeName(store) {
			// 第三步，提交一个commit，触发一个mutation
			console.log('action-change');
			axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register').then((res) => {
				console.log(res);
				const {message} = res.data;
				store.commit('change', message);
			});
			
		}
	},
	modules: {}
})
