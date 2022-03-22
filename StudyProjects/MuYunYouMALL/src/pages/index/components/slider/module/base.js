import {ELEMENT_NODE_TYPE} from './constants';
import DEFAUlTS from './default';


class BaseSlider {
	constructor(el, options) {
		// 判断是不是DOM元素，否的话提示错误
		if (el.nodeType !== ELEMENT_NODE_TYPE) {
			throw new Error("实例化的时候，传入的元素必须是DOM元素");
		}
		this.options = {
			...DEFAUlTS,
			...options
		}
		// 获取DOM元素
		const sliderEl = el;
		const sliderContentEl = sliderEl.querySelector(".slider-content");
		const sliderItemEls = sliderContentEl.querySelectorAll(".slider-item");
		
		// 添加到this上，为了在方法中使用
		this.sliderEl = sliderEl;
		this.sliderContentEl = sliderContentEl;
		this.sliderItemEls = sliderItemEls;
		
		// 最大最小索引
		this.minIndex = 0;
		this.maxIndex = sliderItemEls.length - 1;
		this.currIndex = this.getCorrectedIndex(this.options.initialIndex);
		
		// 每个slider-item的宽度（每次移动的距离）
		this.sliderItemWidth = this.sliderItemEls[0].offsetWidth;
		
		// 初始化
		this.init();
	}
	
	// 获取修正后的索引值
	getCorrectedIndex(index) {
		if (index < this.minIndex) return this.maxIndex;
		if (index > this.maxIndex) return this.minIndex;
		return index;
	}
	
	// 初始化
	init() {
		// 为每个slider-item设置宽度
		this.setItemsWidth();
		// 为slider-content设置宽度
		this.setContentwidth();
		// 切换到初始索引 initialIndex
		this.move(this.getDistance());
		// 开启动画
		if (this.options.animation) this.openAnimation(); else this.closeAnimation();
		// 自动切换
		if (this.options.autoPlay) this.autoPlay();
		
	}
	
	// 为每个slider-item设置宽度
	setItemsWidth() {
		for (const item of this.sliderItemEls) {
			item.style.width = `${this.sliderItemWidth}px`;
		}
	}
	
	// 为slider-content设置宽度
	setContentwidth() {
		this.sliderContentEl.style.width = `${this.sliderItemWidth * this.sliderItemEls.length}px`;
	}
	
	// 不带动画的移动
	move(distance) {
		this.sliderContentEl.style.transform = `translate3d(${distance}px,0px,0px)`;
	}
	
	// 带动画的移动
	moveWithAnimation(distance) {
		this.setAnimationSpeed();
		this.move(distance);
		this.sliderContentEl.addEventListener("transitionend", () => {
			this.setAnimationSpeed(0);
		}, false)
	}
	
	// 获取要移动的距离
	getDistance(index = this.currIndex) {
		return -this.sliderItemWidth * index;
	}
	
	// 开启动画
	openAnimation() {
		this.sliderContentEl.classList.add("slider-animation");
	}
	
	// 关闭动画
	closeAnimation() {
		this.setAnimationSpeed(0);
	}
	
	// 设置切换动画速度
	setAnimationSpeed(speed = this.options.speed) {
		this.sliderContentEl.style.transitionDuration = `${speed}ms`;
	}
	
	// 自动切换
	autoPlay() {
		const {autoPlay} = this.options;
		if (autoPlay <= 0) {
			return;
		}
		this.pause();
		this.autoPlayTimer = setInterval(() => {
			this.next();
		}, autoPlay)
	}
	
	// 暂停自动切换
	pause() {
		if (this.autoPlayTimer) clearInterval(this.autoPlayTimer);
	}
	
	// 切换下一张
	next() {
		this.to(this.currIndex + 1);
	}
	
	// 切换上一张
	prev() {
		this.to(this.currIndex - 1);
	}
	
	// 切换到index索引对应的幻灯片
	to(index) {
		// 校正索引
		index = this.getCorrectedIndex(index);
		// 如果切换的索引和当前的索引一样,那就什么都不做直接返回
		if (this.currIndex === index) {
			return;
		}
		this.currIndex = index;
		const distance = this.getDistance();
		if (this.options.animation) {
			this.moveWithAnimation(distance);
		} else {
			this.move(distance);
		}
	}
}

export default BaseSlider;