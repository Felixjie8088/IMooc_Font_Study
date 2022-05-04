// css
import './tab.css';
import renderTab from './tab.art';

import {getData, getDelayData} from "api/getData";

import {requestURL, TAB_ITEM_CLASS, TAB_ITEM_ACTIVE_CLASS_NAME} from "pages/destination/components/tab/config";


class Tab {
	// el：tab
	constructor(el) {
		this.itemEls = el.querySelectorAll(TAB_ITEM_CLASS);
	}
	
	// 给指定索引的元素加上tab-item-active类名
	setActiveItem(index) {
		for (const itemEl of this.itemEls) {
			itemEl.classList.remove(TAB_ITEM_ACTIVE_CLASS_NAME);
		}
		this.itemEls[index].classList.add(TAB_ITEM_ACTIVE_CLASS_NAME);
	}
	
	// 切换选项卡的状态并发送请求获取详细内容
	to(index) {
		// 取消上一次请求
		if (this.dataPromise && this.dataPromise.xhr) {
			this.dataPromise.xhr.abort();
		}
		this.setActiveItem(index);
		
		this.dataPromise = getData(`${requestURL}${this.itemEls[index].dataset.id}`);
		return this.dataPromise;
	}
}

export default Tab;