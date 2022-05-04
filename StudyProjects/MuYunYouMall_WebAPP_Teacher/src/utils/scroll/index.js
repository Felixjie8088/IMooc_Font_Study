import {INIT_STATE, CHANGED_STATE} from './constants';
import DEFAULT from './default';

class Scroll {
	/*
	* el:需要设置样式的元素
	* changed_class_name:样式效果类名
	* critical_point:当滑动到哪个点或者滑动的距离（距离顶部）为多少时触发
	* scrollContainer:以该元素来获取滚动条的高度
	* eventEl:需要监听滚动条滚动的元素，默认为scrollContainer
	* */
	constructor(options, scrollContainer, eventEl = scrollContainer, el = null) {
		this.options = {
			...DEFAULT,
			...options
		};
		// 滚动条所在的容器
		this.scrollContainer = scrollContainer;
		// 监听滚动事件的元素
		this.eventEl = eventEl;
		this.el = el;
		
		// 设置状态
		this.setState(INIT_STATE);
		// 绑定事件
		this.bindEvent();
	}
	
	// 设置状态
	setState(State) {
		this.state = State;
	}
	
	// 绑定事件
	bindEvent() {
		const {change, reset} = this.options;
		this.eventEl.addEventListener('scroll', () => {
			if (this.isNeedChange()) {
				this.setState(CHANGED_STATE);
				if (typeof change === 'function')
					change();
			} else if (this.isNeedInit()) {
				this.setState(INIT_STATE);
				if (typeof reset === 'function')
					reset();
			}
		}, false);
	}
	
	// 是否需要初始化状态
	isNeedInit() {
		return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.options.critical_point;
	}
	
	// 是否需要调整状态
	isNeedChange() {
		return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.options.critical_point;
	}
}

export default Scroll;