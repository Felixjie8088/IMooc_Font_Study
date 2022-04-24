// css
import './header.css';

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
		this.scrollContainer = scrollContainer;
		this.eventEl = eventEl;
	}
}

export default Header;

const scrollContainer = document.getElementById('index-page');
const headerElement = scrollContainer.querySelector('.header');
const CHANGED_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';
let scroll_state = INIT_STATE;
scrollContainer.addEventListener('scroll', () => {
	if (scroll_state !== CHANGED_STATE && scrollContainer.scrollTop > 0) {
		scroll_state = CHANGED_STATE;
		headerElement.classList.add(CHANGED_CLASS_NAME);
	} else if (scroll_state !== INIT_STATE && scrollContainer.scrollTop <= 0) {
		scroll_state = INIT_STATE;
		headerElement.classList.remove(CHANGED_CLASS_NAME);
	}
}, false);