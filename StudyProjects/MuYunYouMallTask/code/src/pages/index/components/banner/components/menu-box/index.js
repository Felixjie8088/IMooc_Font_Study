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
// v-menu-box
const v_menu_box_div = document.getElementById('v-menu-box');
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
		currLi.addEventListener("mouseenter", (event) => {
			// 所有菜单项去掉active类
			for (let j = 0; j < v_menu_lis.length; j++) {
				v_menu_lis[j].className = '';
			}
			// 自己加active类
			currLi.className = 'active';
			let data_n_val = event.target.attributes["data-n"].value;
			// 获取当前选中的li的二级菜单
			getData(URL + '/' + data_n_val, {}).then(data => {
				let secMenuHtml = renderSecMenu({
					key: data_n_val,
					items: data
				});
				menus_div.innerHTML = secMenuHtml;
				// menus li
				const menus_lis = menus_div.querySelectorAll('.menu');
				// 让所有菜单隐藏，去掉active类
				menus_lis[0].className = 'menu';
				// 让key相同的菜单项添加active类
				menus_lis[0].classList.add('active');
			});
		}, false);
	}
	// 鼠标离开菜单时重置菜单项class
	v_menu_box_div.addEventListener("mouseleave", () => {
		// 所有菜单项清空类
		for (let j = 0; j < v_menu_lis.length; j++) {
			v_menu_lis[j].className = '';
		}
		const menus_lis = menus_div.querySelectorAll('.menu');
		// 让所有菜单隐藏，去掉active类
		menus_lis[0].className = 'menu';
	}, false);
});

