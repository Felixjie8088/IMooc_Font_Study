// 第二种实现效果
const carouselTwo = {
  clickTabEvent(slider) {
    // 添加监听事件
    document.getElementsByClassName("tab")[0].addEventListener("click", function (event) {
      if (event.target.nodeName.toLowerCase() == "span") {
        let index = parseInt(event.target.getAttribute("data-no"));
        slider.to(index);
      }
    }, true)
  }
}

export default carouselTwo;