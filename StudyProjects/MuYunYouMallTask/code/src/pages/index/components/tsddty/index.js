// css
import './tsddty.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// items
import renderItemsData from './items.art';
// tsddty中的items，最后替换其内容
const tsddty_items_div = document.getElementById('tsddty_items_div');

// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderItemsData({
		items: data
	});
	tsddty_items_div.innerHTML = bodyHtml;
})