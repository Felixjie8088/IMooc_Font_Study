import {ELEMENT_NODE_TYPE} from './constants';
import DEFAUlTS from "./default";

class BaseCarousel {
	constructor(el, options) {
		// 判断el是不是DOM元素,否的话提示错误
		if (el.nodeType !== ELEMENT_NODE_TYPE) {
			throw new Error('实例化的时候，传入的元素必须是DOM元素');
		}
		
		// 获取DOM元素
		const carouselEl = el;
		// 需要移动的元素
		const carousel_list = carouselEl.querySelector('#carousel_list');
		// 所有轮播图片
		const carouselItemEls = carousel_list.getElementsByTagName('li');
		// 小圆点
		const circles = document.querySelectorAll('#circles li');
		// 如果有li那么就复制第一张图片添加至最后一个,用于平滑切换
		if (carouselItemEls.length > 0) {
			const firstItemClone = carouselItemEls[0].cloneNode(true);
			carousel_list.appendChild(firstItemClone);
		}
		
		// 添加到this上,方便在方法中获取
		this.options = {
			...DEFAUlTS,
			...options
		};
		this.transition = `all ${this.options.speed / 1000}s ease-in-out 0s`;
		this.carouselEl = carouselEl;
		this.carousel_list = carousel_list;
		this.carouselItemEls = carouselItemEls;
		this.circles = circles;
		
		// 锁
		this.lock = true;
		// 最大最小索引
		this.minIndex = 0;
		this.maxIndex = carouselItemEls.length - 1;
		this.currIndex = 0;
		
		// 设置每个item的宽度(每次需要移动的距离)
		this.carouselItemWidth = this.carouselItemEls[0].offsetWidth;
		
		// 初始化
		this.init();
	}
	
	// 获取修正后的索引值
	getCorrectedIndex(index) {
		if (index < this.minIndex) {
			return this.maxIndex;
		}
		if (index > this.maxIndex) {
			return this.minIndex;
		}
		return index;
	}
	
	// 初始化
	init() {
		// 为每个item设置宽度
		this.setItemsWidth();
		// 为carousel_list设置宽度
		this.setCarouselListWidth();
		// 自动切换
		if (this.options.autoPlay) this.autoPlay();
		// 小圆点的监听事件
		this.handleCircles();
	}
	
	
	// 为每个item设置宽度
	setItemsWidth() {
		for (const item of this.carouselItemEls) {
			item.style.width = `${this.carouselItemWidth}px`;
		}
	}
	
	// 为carousel_list设置宽度
	setCarouselListWidth() {
		this.carousel_list.style.width = `${this.carouselItemEls.length * this.carouselItemWidth}px`;
	}
	
	// 设置过渡样式
	setOverStyle(transition) {
		this.carousel_list.style.transition = transition;
	}
	
	// 设置transform
	setTransform(distance) {
		if (distance) {
			this.carousel_list.style.transform = `translateX(${distance}px)`;
		} else {
			this.carousel_list.style.transform = 'none';
		}
	}
	
	// 获取要移动的距离
	getDistance(index = this.currIndex) {
		return -this.carouselItemWidth * index;
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
	
	// 切换下一个
	next() {
		this.to(this.currIndex + 1);
	}
	
	// 切换上一个
	prev() {
		this.to(this.currIndex - 1);
	}
	
	// 切换到指定index
	to(index = this.currIndex) {
		// 函数防抖
		if (!this.lock) return;
		// 进入函数就关锁
		this.lock = false;
		this.currIndex = index < 0 ? -1 : index;
		// 设置过渡，之所以每次点击都要重新设置过渡，是因为放置最后一个图片将过渡删除了
		this.setOverStyle(this.transition);
		// 过渡完成后开锁
		setTimeout(() => {
			this.lock = true;
		}, this.options.speed);
		// 切换上一个按钮的时候的情况
		if (this.currIndex == -1) {
			// 瞬间拉到最后
			this.setOverStyle('none');
			this.setTransform(this.getDistance(this.maxIndex));
			this.currIndex = this.maxIndex - 1;
			
			setTimeout(() => {
				this.setOverStyle(this.transition);
				this.setTransform(this.getDistance(this.currIndex));
			}, 1);
		}
		// 如果是最后一张轮播图，就等动画结束之后瞬间拉回0号轮播图
		else if (this.currIndex > this.maxIndex - 1) {
			// 进行拉动
			this.setTransform(this.getDistance(this.currIndex));
			// 这个延时器相当于回调函数
			setTimeout(() => {
				// 瞬间拉回，要去掉监听
				this.setOverStyle('none')
				// 拉回
				this.setTransform();
				// 索引重置为0
				this.currIndex = this.minIndex;
			}, this.options.speed);
		}
		// 正常情况下
		else {
			this.setTransform(this.getDistance(this.currIndex));
		}
		this.setCircle();
	}
	
	// 设置小圆点
	setCircle() {
		// 将所有小圆点的样式初始化
		for (const circle of this.circles) {
			circle.className = '';
		}
		// 当前索引位置的小圆点设置样式
		this.circles[this.currIndex % this.maxIndex].className = 'cur';
	}
	
	// 小圆点的监听事件
	handleCircles() {
		for (let i = 0; i < this.circles.length; i++) {
			this.circles[i].addEventListener('click', () => {
				// 当前索引赋值
				this.currIndex = i;
				// 设置过渡样式
				this.setOverStyle(this.transition);
				// 拉动
				this.setTransform(this.getDistance(this.currIndex));
				// 设置小圆点
				this.setCircle();
			}, false);
		}
	}
}

export default BaseCarousel;