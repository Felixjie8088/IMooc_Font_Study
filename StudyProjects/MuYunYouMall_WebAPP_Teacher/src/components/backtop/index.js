// css
import './backtop.css';
import 'icons/iconfont.css';

import Scroll from "utils/scroll";

const BACKTOP_HIDDEN_CLASS = "backtop-hidden";

class BackTop extends Scroll {
	constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
		super({
			critical_point,
			change: () => {
				this.show();
			},
			reset: () => {
				this.hide();
			}
		}, scrollContainer, eventEl, el)
		
		// 绑定事件
		this.bindEvent();
	}
	
	// 绑定事件
	bindEvent() {
		super.bindEvent();
		// 点击事件
		this.el.addEventListener('click', () => {
			this.scrollTo();
		}, false);
	}
	
	// X轴/Y轴 指定滚动到什么位置
	scrollTo(top = 0, left = 0) {
		this.scrollContainer.scrollTo({
			top,
			left,
			// 行为(动画)
			behavior: 'smooth'
		})
	}
	
	// 移除class
	show() {
		this.el.classList.remove(BACKTOP_HIDDEN_CLASS);
	}
	
	// 添加class
	hide() {
		this.el.classList.add(BACKTOP_HIDDEN_CLASS);
	}
}

export default BackTop;