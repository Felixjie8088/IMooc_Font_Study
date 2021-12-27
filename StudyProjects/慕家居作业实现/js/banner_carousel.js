/*
* banner 轮播图特效实现、自动轮播
*/
(function () {
  // 大Banner层
  var oBanner = document.getElementById("banner");
  // 图片ul
  var oImg_ul = document.getElementById("img_ul");
  // 图片li列表
  var oImg_ul_lis = oImg_ul.getElementsByTagName("li");
  // 小圆点
  var oPoint_list = document.getElementById("point_list");
  // 小圆点li
  var oPoint_list_lis = point_list.getElementsByTagName("li");

  // 复制第一张图片作为假图片，用于切换到最后一张图片的时候能够重新从第一张图片开始
  var Img_ul_first = oImg_ul.firstElementChild.cloneNode(true);
  // 上树
  oImg_ul.appendChild(Img_ul_first);

  // 设置全局变量，表示当前轮播到哪张图片
  var currindex = 0;
  // 节流锁
  var lock = true;
  // 小圆点点击
  oPoint_list.onclick = function (e) {
    // 只有当是li被点击时才切换
    if (e.target.tagName.toLowerCase() == "li") {
      // 获取li标签上的data-no属性，用来计算移动的百分比
      var no = e.target.getAttribute("data-no");
      // 设置当前的图片索引位置为当前小圆点上的属性
      currindex = parseInt(no);
      // 切换图片
      oImg_ul.style.transition = "transform 0.5s ease 0s";
      oImg_ul.style.transform = "translateX(" + currindex * (-25) + "%)";
      // 设置小圆点
      setCircles();
    }
  };

  // 设置小圆点
  function setCircles() {
    // 进行排他操作
    for (var i = 0; i < oPoint_list_lis.length; i++) {
      if (i == currindex % 3) {
        oPoint_list_lis[i].className = "curr";
      } else {
        oPoint_list_lis[i].className = "";
      }
    }
  }

  // banner向右轮播
  function banner_right_move() {
    if (!lock) return;
    // 关锁
    lock = false;

    // 切换到下一张图片
    currindex++;
    oImg_ul.style.transition = "transform 0.5s ease 0s";
    oImg_ul.style.transform = "translateX(" + currindex * (-25) + "%)";
    if (currindex > 2) {
      setTimeout(function () {
        // 取消动画
        oImg_ul.style.transition = "none";
        // 删除transform属性
        oImg_ul.style.transform = "none";
        // 拉回第一张图片位置
        currindex = 0;

      }, 500);
    }

    // 设置小圆点
    setCircles();

    // 动画结束之后开锁
    setTimeout(function () {
      lock = true;
    }, 500);
  }

  // 设置定时器,自动轮播
  var interval_right_move = setInterval(banner_right_move, 2000);
  // 当鼠标悬浮在图片上时暂停定时器
  oBanner.onmouseenter = function () {
    if (interval_right_move) {
      clearInterval(interval_right_move);
    }
  }
  // 当鼠标离开图片上时继续定时器
  oBanner.onmouseleave = function () {
    if (interval_right_move) {
      clearInterval(interval_right_move);
    }
    interval_right_move = setInterval(banner_right_move, 2000);
  }
})();