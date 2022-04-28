// css
import './nav.css';

import renderNav from './nav.art';


// 请求方法
import {getData, getDelayData} from "api/getData";
// 配置相关
import {requestURL, INDEX_LAYOUT_ID} from "pages/index/components/nav/config";
// 导航元素
const index_nav = document.getElementById(INDEX_LAYOUT_ID);
// 获取数据
getData(requestURL, {}).then(data => {
    index_nav.innerHTML = renderNav({navItems: data});
})