// css
import './carousel.css';

import './components/circles';

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
});