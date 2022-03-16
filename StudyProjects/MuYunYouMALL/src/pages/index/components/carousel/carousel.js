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
  // 小圆点
  var oCircles_ol = document.getElementById("circles_ol");
  var oCircles_ol_lis = oCircles_ol.getElementsByTagName("li");
  // banner
  var oBanner = document.getElementById("banner");
  // 返回顶部
  var oBackToTop = document.getElementById("backToTop");

  //获得轮播图中的所有对象，并复制出第一个li对象放到最后
  var cloneFirstImg = oCarousel.firstElementChild.cloneNode(true);
  oCarousel.appendChild(cloneFirstImg);
  // 当前的图片索引位置
  var currIndex = 0;

  // 节流锁
  var lock = true;
  oLeftBtn.onclick = left_btn_handler;
  // 左按钮点击事件
  function left_btn_handler() {
    // 如果锁没开就什么也不做
    if (!lock) return;
    // 关锁
    lock = false;
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
    // 动画结束之后开锁
    setTimeout(function () {
      lock = true;
    }, 500);
  }

  oRightBtn.onclick = right_btn_handler;
  // 右按钮点击事件
  function right_btn_handler() {
    // 如果锁没开就什么也不做
    if (!lock) return;
    // 关锁
    lock = false;
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
    // 动画结束之后开锁
    setTimeout(function () {
      lock = true;
    }, 500);
  }

  // 设置小圆点
  function setCircles() {
    for (var i = 0; i < oCircles_ol_lis.length; i++) {
      // if (i == currIndex || i == 5) { //二者等价
      if (i == currIndex % 5) {
        oCircles_ol_lis[i].className = "current";
      } else {
        oCircles_ol_lis[i].className = "";
      }
    }
  }

  // 点击小圆点切换轮播图片
  //方法1
  // oCircles_ol.onclick = function (e) {
  //   for (var i = 0; i < oCircles_ol_lis.length; i++) {
  //     if (oCircles_ol_lis[i] === e.target) {
  //       oCircles_ol_lis[i].className = "current";
  //       currIndex = i;
  //     } else if (oCircles_ol_lis[i] !== e.target && e.target !== e.currentTarget) {
  //       oCircles_ol_lis[i].className = "";
  //     }
  //   }
  //   oCarousel.style.transition = "transform .5s linear 0s";
  //   oCarousel.style.transform = "translateX(" + (-16.666 * currIndex) + "%)";
  // }
  //方法2
  oCircles_ol.onclick = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      currIndex = parseInt(e.target.getAttribute("data-no"));
      oCarousel.style.transition = "transform .5s linear 0s";
      oCarousel.style.transform = "translateX(" + (-16.666 * currIndex) + "%)";
      setCircles();
    }
  }
  // 设置定时器,自动轮播
  var interval_right_btn = setInterval(right_btn_handler, 2000);
  // 当鼠标悬浮在图片上时暂停定时器
  oBanner.onmouseenter = function () {
    if (interval_right_btn) {
      clearInterval(interval_right_btn);
    }
  }
  // 当鼠标离开图片上时继续定时器
  oBanner.onmouseleave = function () {
    if (interval_right_btn) {
      clearInterval(interval_right_btn);
    }
    interval_right_btn = setInterval(right_btn_handler, 2000);
  }
  // 返回顶部
  var interval_back_to_top;
  oBackToTop.onclick = function () {
    // 如果有先删除
    if (interval_back_to_top) clearInterval(interval_back_to_top);

    interval_back_to_top = setInterval(function () {
      document.documentElement.scrollTop -= 70;
    }, 20);

  }
  // 当用户滚动了滚动条才出现返回顶部，否则不显示
  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || window.scrollY;
    if (scrollTop == 0) {
      oBackToTop.style.display = "none";
      // 如果已经到顶部了  就停止
      clearInterval(interval_back_to_top);
    } else {
      oBackToTop.style.display = "block";
    }
  }
})();