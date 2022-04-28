// css
import './product.css';


import renderProductItem from './item.art';


// 请求方法
import {getData, getDelayData} from "api/getData";
// 配置相关
import {requestURL, ITEM_LAYOUT_ID} from "pages/index/components/product/config";
// 导航元素
const item_pro = document.getElementById(ITEM_LAYOUT_ID);
// 获取数据
getData(requestURL, {}).then(data => {
    item_pro.innerHTML = renderProductItem({proItems: data});
})