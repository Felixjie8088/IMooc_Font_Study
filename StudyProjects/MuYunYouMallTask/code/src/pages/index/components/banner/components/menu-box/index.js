// css
import './menu-box.css';

import './components/second-menu';


// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// v-menu
import renderVMenuData from './v-menu.art';
// menus
import renderSecMenu from './components/second-menu/second-menu.art';
// v-menu
const v_menu_div = document.getElementById('v-menu');
// menus
const menus_div = document.getElementById('menus');

// 获取v-menu中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderVMenuData({
		items: data
	});
	v_menu_div.innerHTML = bodyHtml;
	
	// v-menu li
	const v_menu_lis = v_menu_div.querySelectorAll('li[data-n]');
	// 一级菜单hover事件
	for (let i = 0; i < v_menu_lis.length; i++) {
		let currLi = v_menu_lis[i];
		(function (i) {
			currLi.addEventListener("mouseenter", (event) => {
				let data_n_val = event.target.attributes["data-n"].value;
				console.log(data_n_val);
				// 获取当前选中的li的二级菜单
				getData(URL + '/' + data_n_val, {}).then(data => {
					console.log(data)
					let secMenuHtml = renderSecMenu({
						key: data_n_val,
						items: data
					});
					menus_div.innerHTML = secMenuHtml;
				});
			}, false);
		})(i);
	}
});
