// css
import './jjzyx.css';

// api
import getData from "api/getData";
// URL  config
import {URL} from "./config";
// title-content 标题组件
import renderTitleData from '../title-content/title-content.art';
// body-content  内容组件
import renderBodyData from '../body-content/body-content.art';
// jjzyx中的title-div，最后替换其内容
const jjzyx_title_div = document.getElementById('jjzyx-title-div');
// jjzyx中的title-div，最后替换其内容
const jjzyx_body_div = document.getElementById('jjzyx-body-div');

// render标题div
let titleHtml = renderTitleData({
	title: "机酒自由行",
	slogan: "挑选全球机票、酒店、邮轮等旅行产品",
	isDisplay: true,
	items: [
		{curr: true, text: "近期好货"},
		{curr: false, text: "新品汇聚"},
		{curr: false, text: "定制游"},
		{curr: false, text: "国内推荐"},
		{curr: false, text: "优惠机票"},
		{curr: false, text: "热门海岛"},
		{curr: false, text: "热门海岛"},
		{curr: false, text: "热卖签证"}
	]
});

jjzyx_title_div.innerHTML = titleHtml;
// 获取bd中的数据
getData(URL, {}).then(data => {
	// 将获取到的数据进行渲染得到生成的html内容
	let bodyHtml = renderBodyData({
		data: data,
		hasMask: false
	});
	
	jjzyx_body_div.innerHTML = bodyHtml;
})