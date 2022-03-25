// css
import './ddwl.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// title-content 标题组件
import renderTitleData from '../title-content/title-content.art';
// bdItems  内容组件
import renderBdItemsData from './bdItems.art';
// ddwl中的title-div，最后替换其内容
const ddwl_title_div = document.getElementById('ddwl-title-div');
// ddwl中的title-div，最后替换其内容
const ddwl_body_div = document.getElementById('ddwl-body-div');

// render标题div
let titleHtml = renderTitleData({
	title: "当地玩乐",
	slogan: "像当地人一样，体验本土的吃喝玩乐",
	isDisplay: true,
	items: [
		{curr: true, text: "国内"},
		{curr: false, text: "日本"},
		{curr: false, text: "韩国"},
		{curr: false, text: "澳大利亚"},
		{curr: false, text: "新西兰"},
		{curr: false, text: "美国"},
		{curr: false, text: "泰国"},
		{curr: false, text: "斯里兰卡"}
	]
});

ddwl_title_div.innerHTML = titleHtml;
// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderBdItemsData(data);
	ddwl_body_div.innerHTML = bodyHtml;
})