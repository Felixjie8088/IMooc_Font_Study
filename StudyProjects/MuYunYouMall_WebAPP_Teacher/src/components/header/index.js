// css
import './header.css';


const CHANGED_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';

class Header {
	/*
	* el:需要设置样式的元素
	* critical_point:当滑动到哪个点或者滑动的距离（距离顶部）为多少时触发
	* scrollContainer:以该元素来获取滚动条的高度
	* eventEl:需要监听滚动条滚动的元素，默认为scrollContainer
	* */
	constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
		this.el = el;
		this.critical_point = critical_point;
		// 滚动条所在的容器
		this.scrollContainer = scrollContainer;
		// 监听滚动事件的元素
		this.eventEl = eventEl;
		
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
		this.eventEl.addEventListener('scroll', () => {
			if (this.isNeedChange()) {
				this.setState(CHANGED_STATE);
				this.change();
			} else if (this.isNeedInit()) {
				this.setState(INIT_STATE);
				this.reset();
			}
		}, false);
	}
	
	// 添加class
	change() {
		this.el.classList.add(CHANGED_CLASS_NAME);
	}
	
	// 移除class
	reset() {
		this.el.classList.remove(CHANGED_CLASS_NAME);
	}
	
	// 是否需要初始化状态
	isNeedInit() {
		return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.critical_point;
	}
	
	// 是否需要调整状态
	isNeedChange() {
		return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_point;
	}
}

export default Header;