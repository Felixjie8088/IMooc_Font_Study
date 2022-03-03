// 第一种实现效果
const carouselOne = {
  // 自动切换效果
  bindAutoEvent(slider) {
    let interval = null;
    interval = setInterval(function () {
      slider.next();
    }, 1000);
    // 移入停止
    document.querySelector(".banner-slider").addEventListener('mouseenter', function () {
      if (interval)
        clearInterval(interval);
    });
    // 移出继续
    document.querySelector(".banner-slider").addEventListener('mouseleave', function () {
      if (interval) {
        clearInterval(interval);
        interval = setInterval(function () {
          slider.next();
        }, 1000);
      }
    });
  },
  // 点击小圆点切换效果
  clickDotEvent(slider) {
    document.getElementsByClassName("dots")[0].addEventListener("click", function (event) {
      if (event.target.nodeName.toLowerCase() == "span") {
        let index = parseInt(event.target.getAttribute("data-no"));
        slider.to(index);
      }
    }, true);
  }
}

export default carouselOne;