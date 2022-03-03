// base
import { DATA_NO, ELEMENT_NODE } from "./constant.js";
import DEFAULTS from "./default.js";


// 父类
class BaseSlider {
  constructor(el, options) {
    if (el.nodeType !== ELEMENT_NODE)
      throw new Error('实例化的时候，请传入 DOM 元素！');

    // 实际参数
    this.options = {
      ...DEFAULTS,
      ...options
    };

    // 元素
    const slider = el;
    const sliderContent = slider.querySelector('.slider-content');
    const sliderItems = sliderContent.querySelectorAll('.slider-item');
    const spanItems = slider.getElementsByTagName("span");

    // 添加到 this 上，为了在方法中使用
    this.slider = slider;
    this.sliderContent = sliderContent;
    this.sliderItems = sliderItems;
    this.spanItems = spanItems;

    // 设置最小最大index、当前index
    this.minIndex = 0;
    this.maxIndex = sliderItems.length - 1;
    this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

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
  }

  // 设置类名
  setClassName(elements, default_name, class_name, index) {

    // 遍历所有slider-item设置样式、进行排他操作
    for (const item of elements) {
      let data_no = parseInt(item.getAttribute(DATA_NO));
      // 排他操作
      if (!isNaN(data_no) && data_no == index) {
        item.className = default_name + " " + class_name;
      } else {
        item.className = default_name;
      }
    }
  }

  // 切换到 index 索引对应的幻灯片
  to(index) {
    // 修正index
    index = this.getCorrectedIndex(index);
    // 如果index没有发生变化，则不执行
    if (this.currIndex === index) return;

    this.currIndex = index;
    // 设置图片类名
    this.setClassName(this.sliderItems, "slider-item", "slider-item-active", this.currIndex);
    // 设置小圆点类名
    this.setClassName(this.spanItems, "", "active", this.currIndex);
  }

  // 切换上一张
  prev() {
    this.to(this.currIndex - 1);
  }

  // 切换下一张
  next() {
    this.to(this.currIndex + 1);
  }

  // 获取当前索引
  getCurrIndex() {
    return this.currIndex;
  }
}


export default BaseSlider;
