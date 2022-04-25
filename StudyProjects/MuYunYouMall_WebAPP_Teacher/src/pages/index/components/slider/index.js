// css
import 'swiper/swiper-bundle.min.css';
import './slider.css';

import Swiper from 'swiper/swiper-bundle.min';
// 配置文件
import config, {SWIPER_CONTAINER_CLASS, requestURL, INDEX_LAYOUT_ID} from './config';
// 请求API
import {getData, getDelayData} from 'api/getData';
// slider内容
import renderSlider from './slider.art';

// slider所在的父容器，将获取到数据进行render
const index_sliderEl = document.getElementById(INDEX_LAYOUT_ID);
// 获取幻灯片图片数据
const p = getData(requestURL, {}).then(
	data => {
		let sliderInnerHtml = renderSlider({
			...config,
			...{sliderItems: data}
		});
		index_sliderEl.innerHTML = sliderInnerHtml;
		// 给slider添加样式和功能
		new Swiper(SWIPER_CONTAINER_CLASS, config);
	}
)
// console.log(p);