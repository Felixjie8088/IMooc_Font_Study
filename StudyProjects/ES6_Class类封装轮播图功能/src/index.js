import "../css/base.css";
import "../css/index.css";
import BaseCarouselCutover from "./base.js";
import carouselOne from "./carousel_one";
import carouselThree from "./carousel_three";
import carouselTwo from "./carousel_two";


// 切换实现方法
class CarouselCutover extends BaseCarouselCutover {
  constructor(el, options) {
    super(el, options);
    this._bindEventOne();
    this._bindEventTwo();
    this._bindEventThree();
  }

  _bindEventOne() {
    carouselOne.bindAutoEvent(this);
    carouselOne.clickDotEvent(this);
  }
  _bindEventTwo() {
    carouselTwo.clickTabEvent(this);
  }
  _bindEventThree() {
    carouselThree.clickArrowEvent(this);
  }
}

const banner_slider = new CarouselCutover(document.querySelector('.banner-slider'));
const tab_slider = new CarouselCutover(document.querySelector('.tab-slider'));
const pagination_arrow_slider = new CarouselCutover(document.querySelector('.pagination-arrow-slider'));

// export { banner_slider, tab_slider, pagination_arrow_slider };

