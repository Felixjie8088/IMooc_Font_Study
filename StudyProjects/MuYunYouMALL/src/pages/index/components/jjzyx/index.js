// css
import './jjzyx.css'

// 请求URL
import {getDataUrl} from "./config";
// 请求api
import GetData from "api/getData";
// art模板获取一个函数
import renderData from './items.art';

GetData(getDataUrl, {}).then(response => {
	// console.log(response);
	// 传递获取到的参数让renderData函数渲染
	let html = renderData({
		items: response.items,
		more: response.more,
		big_one: response.one
	})
	// console.log(html);
	const bd = document.querySelector(".jjzyx .list");
	bd.innerHTML = html;
}).catch(err => {
	console.log(err);
});