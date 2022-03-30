// css
import './carousel.css';

import './components/circles';
// 轮播图功能
import Carousel from './module';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// carousel_list
import renderCarouselListData from './items.art';
// v-menu
const carousel_list_div = document.getElementById('carousel_list');

// 获取v-menu中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderCarouselListData({
		items: data
	});
	carousel_list_div.innerHTML = bodyHtml;
	
	// 轮播图功能
	// 获取DOM元素
	// 得到两个按钮
	const leftbtn = document.querySelector('#leftbtn');
	const rightbtn = document.querySelector('#rightbtn');
	// banner
	const banner = document.querySelector('#banner');
	
	const carousel = new Carousel(document.querySelector('.carousel'), {
		// 切换速度，单位ms
		speed: 500,
		// 自动切换，单位ms
		autoPlay: 0
	});
	// 左按钮事件
	leftbtn.addEventListener("click", () => {
		carousel.prev();
	}, false);
	// 右按钮事件
	rightbtn.addEventListener("click", () => {
		carousel.next();
	}, false);
	
	// 鼠标移入就暂停
	banner.addEventListener("mouseenter", () => {
		carousel.pause()
	}, false);
	// 鼠标移出就开启
	banner.addEventListener("mouseleave", () => {
		carousel.autoPlay()
	}, false);
});