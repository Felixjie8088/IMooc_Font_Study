// css
import './slider.css';
import './btn_arrow.css'
// js
import './module';

import Slider from './module';

import renderSlider from './slider.art'

// api
import getData from 'api/getData';
// 请求URL
import {GetDataUrl} from './config';
// 请求数据，拼接HTML
getData(GetDataUrl, {}).then(data => {
	// console.log(data);
	// console.log(renderSlider);
	const sliderLayout = document.querySelector("#slider-layout");
	let html = renderSlider({
		items: data
	});
	sliderLayout.innerHTML = html;
	
	const slider = new Slider(document.querySelector('.slider'), {
		// 初始索引
		initialIndex: 0,
		// 切换时是否有动画
		animation: true,
		// 切换速度，单位ms
		speed: 300,
		// 自动切换，单位ms
		autoPlay: 0
	});
	
	const leftBtn = document.querySelector(' #leftBtn');
	const rightBtn = document.querySelector(' #rightBtn');
	const banner = document.querySelector(' .banner');
	
	leftBtn.addEventListener("click", () => {
		slider.prev();
	}, false);
	
	rightBtn.addEventListener("click", () => {
		slider.next();
	}, false);
	
	
	banner.addEventListener("mouseenter", () => {
		slider.pause()
	}, false);
	
	banner.addEventListener("mouseleave", () => {
		slider.autoPlay()
	}, false);
}).catch(err => {
	console.log(err)
});