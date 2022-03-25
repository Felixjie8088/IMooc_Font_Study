// css
import './zsj.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// title-content 标题组件
import renderTitleData from '../title-content/title-content.art';
// body-content  内容组件
import renderBodyData from '../body-content/body-content.art';
// zsj中的title-div，最后替换其内容
const zsj_title_div = document.getElementById('zsj-title-div');
// zsj中的title-div，最后替换其内容
const zsj_body_div = document.getElementById('zsj-body-div');

// render标题div
let titleHtml = renderTitleData({
	title: "最世界·深度旅行",
	slogan: "摆脱千篇一律的旅行，探索属于自己的世界",
	isDisplay: true,
	items: [
		{curr: true, text: "城市旅行"},
		{curr: false, text: "乡村旅行"},
	]
});

zsj_title_div.innerHTML = titleHtml;
// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderBodyData({
		data,
		hasMask: true
	});
	zsj_body_div.innerHTML = bodyHtml;
})