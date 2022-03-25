// css
import './xxsw.css';
import '../title-content/title-content.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// title-content 标题组件
import renderTitleData from '../title-content/title-content.art';
// bditems xxsw bd items内容
import renderBdItemsData from './bdItems.art';
// xxsw中的title-div，最后替换其内容
const xxsw_title_div = document.getElementById('xxsw-title-div');
// xxsw中的title-div，最后替换其内容
const xxsw_body_div = document.getElementById('xxsw-body-div');

// render标题div
let titleHtml = renderTitleData({
	title: "新鲜甩尾",
	slogan: "每日不可不看的好货",
	isDisplay: false,
	items: []
});

xxsw_title_div.innerHTML = titleHtml;
// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderBdItemsData({
		items: data
	});
	xxsw_body_div.innerHTML = bodyHtml;
})