/*
* 垂直采单特效实现
*/
(function () {
  // banner菜单大盒子
  var oBanner_nav = document.getElementById("banner_nav");
  // banner菜单列表
  var oBanner_nav_ul = document.getElementById("banner_nav_ul");
  // banner二级菜单盒子
  var oBanner_menus_box = document.getElementById("menus_box");
  // banner二级菜单列表
  var oBanner_menus_lis = oBanner_menus_box.getElementsByTagName("div");

  // 当鼠标在banner一级菜单上悬停时，显示其对应二级菜单 不能用onmouseenter 因为不冒泡
  oBanner_nav_ul.onmouseover = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      var ul_data_title = e.target.getAttribute("data-title");
      for (var i = 0; i < oBanner_menus_lis.length; i++) {
        if (oBanner_menus_lis[i].getAttribute("data-title") == ul_data_title) {
          if (oBanner_menus_lis[i].className.indexOf("curr") == -1)
            oBanner_menus_lis[i].className += " curr";
        } else {
          oBanner_menus_lis[i].className = "menu";
        }
      }

    }
  };

  // 当鼠标离开菜单大盒子时移除class  不能用onmouseout  因为不冒泡   这里要用大盒子  不然的话 二级菜单会选不到，还要设置大盒子的宽度
  oBanner_nav.onmouseleave = function () {
    for (var i = 0; i < oBanner_menus_lis.length; i++) {
      oBanner_menus_lis[i].className = "menu";
    }
  };

})();