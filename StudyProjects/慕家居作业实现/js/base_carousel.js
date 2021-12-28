(function () {
  // 网页商品图片ul
  var o_prod_ul = document.getElementById("prod_ul");
  // 左按钮
  var o_left_btn = document.getElementById("wysp_left_btn");
  // 右按钮
  var o_right_btn = document.getElementById("wysp_right_btn");
  // 当前图片位置
  var currindex = 0;

  console.log(o_prod_ul.children);

  // 复制所有图片放到最后，切换到最后一张的时候瞬间切换到最前面
  // 所有的li标签
  var prod_lis = o_prod_ul.getElementsByTagName("li");

  // 以下导致页面卡死CPU升高
  // // 循环加到ul中
  // for (var i = 0; i < prod_lis.length; i++) {
  //   var copy_prod_ul_li = prod_lis[i].cloneNode(true);
  //   o_prod_ul.appendChild(copy_prod_ul_li);
  // }

  // 右按钮点击事件
  function right_btn_handler() {
    currindex++;
    o_prod_ul.style.transition = "transform 0.5s linear 0s";
    o_prod_ul.style.transform = "translateX(" + currindex * (-240) + "px)";
    if (currindex > o_prod_ul.childElementCount - 6) {
      currindex = 0;
      setTimeout(function () {
        o_prod_ul.style.transform = "translateX(" + currindex * (-240) + "px)";
      }, 500);
    }
  }

  // 左按钮点击事件
  function left_btn_handler() {

  }

  o_right_btn.onclick = right_btn_handler;
})();