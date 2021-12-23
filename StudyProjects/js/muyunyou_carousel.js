/*
* 轮播图特效实现
*/
(function () {
  //轮播图
  var oCarousel = document.getElementById("carousel_list");
  //左按钮
  var oLeftBtn = document.getElementById("leftBtn");
  //右按钮
  var oRightBtn = document.getElementById("rightBtn");

  var oCircles_ol = document.getElementById("circles_ol");
  var oCircles_ol_lis = oCircles_ol.getElementsByTagName("li");

  //获得轮播图中的所有对象，并复制出第一个li对象放到最后
  var cloneFirstImg = oCarousel.firstElementChild.cloneNode(true);
  oCarousel.appendChild(cloneFirstImg);
  // 当前的图片索引位置
  var currIndex = 0;
  oLeftBtn.onclick = function () {
    var offsetLength;
    if (currIndex == 0) {
      // 去掉过渡
      oCarousel.style.transition = "none";
      // 全局图片索引重置为最后一张图
      currIndex = oCarousel.childElementCount - 1;
      // 瞬间拉到最后
      offsetLength = currIndex * (-16.666);
      oCarousel.style.transform = "translateX(" + offsetLength + "%)";

      currIndex--;
      // 小技巧，延时0毫秒可以让刚才的瞬移发生之后再把过渡加上
      setTimeout(function () {
        offsetLength = currIndex * (-16.666);
        oCarousel.style.transition = "transform .5s linear 0s";
        oCarousel.style.transform = "translateX(" + offsetLength + "%)";
      }, 0);
    } else {
      currIndex--;
      offsetLength = currIndex * (-16.666);
      oCarousel.style.transform = "translateX(" + offsetLength + "%)";
    }
    // 设置小圆点
    setCircles();
  }
  oRightBtn.onclick = function () {
    currIndex++;
    var offsetLength = currIndex * (-16.666);
    oCarousel.style.transition = "transform .5s linear 0s";
    oCarousel.style.transform = "translateX(" + offsetLength + "%)";
    if (currIndex > 4) {
      setTimeout(function () {
        // 去掉过渡
        oCarousel.style.transition = "none";
        // 删除transform属性
        oCarousel.style.transform = "none";
      }, 500);
      // 全局图片索引重置为0
      currIndex = 0;
    }

    // 设置小圆点
    setCircles();
  }

  // 设置小圆点
  function setCircles() {
    for (var i = 0; i < oCircles_ol_lis.length; i++) {
      if (i == currIndex) {
        oCircles_ol_lis[i].className = "current";
      } else {
        oCircles_ol_lis[i].className = "";
      }
    }
  }
})();