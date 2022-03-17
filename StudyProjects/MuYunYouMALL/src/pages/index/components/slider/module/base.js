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
  }
}

export default BaseSlider;