// 第三种实现效果
const carouselThree = {
  clickArrowEvent(slider) {
    // 获取上一个下一个按钮元素
    const btn_prev = document.querySelector(".prev");
    const btn_next = document.querySelector(".next");
    // 添加监听事件
    btn_prev.addEventListener("click", function () {
      slider.prev();
    }, true)
    btn_next.addEventListener("click", function () {
      slider.next();
    }, true)
  }
}

export default carouselThree;