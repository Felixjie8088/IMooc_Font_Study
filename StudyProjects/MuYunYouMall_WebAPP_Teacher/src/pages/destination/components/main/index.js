// css
import './main.css';

import Tab from '../tab';
import Content from '../content';

import 'components/loading';
import {get, set} from "utils/scroll/sessionStorage";

// tab父元素
const tabElement = document.querySelector('.tab');
// 实例化tab类
const tab = new Tab(tabElement);
// content元素
const destinationContent = document.getElementById('destination-content');
// // 所有的tab-item元素
// const tab_items = tabElement.querySelectorAll('.tab-item');
// 事件委托：给tab添加点击事件判断点击的元素是否是tab-item
tabElement.addEventListener('click', (e) => {
	const itemEl = e.target;
	if (itemEl.classList.contains('tab-item')) {
		// content组件元素
		const content = new Content(destinationContent);
		// 元素属性上的data-id减一得到当前点击元素的索引
		const index = parseInt(itemEl.dataset.id) - 1;
		const storageName = `destination_content_${index}`;
		const storageContent = get(storageName);
		// 如果缓存中有那么就用缓存的没有就去请求
		if (storageContent) {
			tab.setActiveItem(index);
			content.set(storageContent);
		} else {
			// 切换选项卡
			const tabPromise = tab.to(index);
			// 在获取数据时加载loading组件，提升用户体验
			content.setLoading();
			// 获取数据并替换内容
			tabPromise.then(data => {
				if (data) {
					content.set(data);
					set(storageName, data);
				}
			}).catch(err => {
				console.log(err);
			})
		}
	}
}, false)
// 默认选中第一个并加载第一个选项卡的详细内容
tabElement.querySelectorAll('.tab-item')[0].click();

