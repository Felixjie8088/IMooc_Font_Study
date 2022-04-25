// Swiper配置

export default {
	// direction: 'vertical', // 垂直切换选项，默认为水平方向
	loop: true, // 循环模式选项
	
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
		clickable: true //是都可点击切换
	},
	
	// // 如果需要前进后退按钮
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	
	// // 如果需要滚动条
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
}
// swiper容器
export const SWIPER_CONTAINER_CLASS = '.swiper-container';
export const requestURL = 'https://www.imooc.com/api/mall-wepApp/index/slider';
export const INDEX_LAYOUT_ID = 'index-slider';