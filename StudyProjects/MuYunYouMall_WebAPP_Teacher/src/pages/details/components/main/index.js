// css
import './main.css';

import './components/propicinfo';
import renderPropicinfo from './components/propicinfo/propicinfo.art';
import './components/procommon';
import renderProcommon from './components/procommon/procommon.art';

import {requestURL, PRODUCTPICINFO_ID, PROMODULE_ID, PRODUCTPIC_ID} from './config';

import {analysisURL} from "utils/common/common";

import {getData, getDelayData} from "api/getData";

// 获取从首页点击进入详情页的url参数,进行解析然后拼接请求详情页数据的url
const localURL = window.location.search;

// 产品图片展示区元素，获取数据后替换内容
const pro_info_pic = document.getElementById(PRODUCTPICINFO_ID);

// 产品简介、预定流程、退款流程区元素
const pro_module = document.getElementById(PROMODULE_ID);

getData(requestURL + analysisURL(localURL, 'id'), {}).then(res => {
	// 产品图片展示区元素，获取数据后替换内容
	pro_info_pic.innerHTML = renderPropicinfo({...res});
	//产品图片元素，需要设置背景图片url
	const pro_pic = document.getElementById(PRODUCTPIC_ID);
	pro_pic.style.background = `url('${res.img}') no-repeat`;
	
	// 产品图片展示区元素，获取数据后替换内容
	pro_module.innerHTML = renderProcommon({...res});
}).catch(err => {
	console.log(err);
})

