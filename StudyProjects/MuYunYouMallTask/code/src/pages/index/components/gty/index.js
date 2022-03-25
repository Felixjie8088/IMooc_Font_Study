// css
import './gty.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// title-content 标题组件
import renderTitleData from '../title-content/title-content.art';
// body-content  内容组件
import renderBodyData from '../body-content/body-content.art';
// gty中的title-div，最后替换其内容
const gty_title_div = document.getElementById('gty-title-div');
// zsj中的title-div，最后替换其内容
const gty_body_div = document.getElementById('gty-body-div');

// render标题div
let titleHtml = renderTitleData({
	title: "跟团/半自助游",
	slogan: "旅游需要好的选择，踏实省心",
	isDisplay: true,
	items: [
		{curr: true, text: "跟团"},
		{curr: false, text: "半自助游"},
	]
});

gty_title_div.innerHTML = titleHtml;
// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderBodyData({
		data,
		hasMask: true
	});
	gty_body_div.innerHTML = bodyHtml;
})