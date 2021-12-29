(function () {
  // 网页商品图片ul
  var o_jptj_bd_ul = document.getElementById("jptj_bd_ul");
  // 左按钮
  var o_left_btn = document.getElementById("jptj_left_btn");
  // 右按钮
  var o_right_btn = document.getElementById("jptj_right_btn");
  // 当前图片位置
  var currindex = 0;

  // 复制所有图片放到最后，切换到最后一张的时候瞬间切换到最前面，这里其实只需要复制前5张图片即可（也就是页面显示几张就得复制几张加在后面）
  o_jptj_bd_ul.innerHTML += o_jptj_bd_ul.innerHTML;

  // 节流锁
  var throttle_lock = true;

  // 移动的固定值
  var offset_length = -407;

  // 右按钮点击事件
  function right_btn_handler() {
    if (!throttle_lock) return;

    throttle_lock = false;
    currindex++;
    // 设置过渡效果
    setStyle(false);

    // 要在图片完全通过且再通过5个的那张进行重置
    if (currindex > o_jptj_bd_ul.childElementCount - 7) {
      currindex = 0;
      setTimeout(function () {
        // 设置过渡效果
        setStyle(true);
      }, 500);
    }

    // 所有操作完毕之后开锁
    setTimeout(function () {
      throttle_lock = true;
    }, 500);
  }

  // 左按钮点击事件
  function left_btn_handler() {
    if (!throttle_lock) return;
    throttle_lock = false;
    // 当是第一张图片的时候要瞬间拉倒复制出来的那组图片中的第一张这样才能往前面切换
    if (currindex == 0) {
      currindex = 6;
      o_jptj_bd_ul.style.transition = "none";
      o_jptj_bd_ul.style.transform = "translateX(" + currindex * (offset_length) + "px)";

      currindex--;
      // 设置0毫秒的延时器，可以让刚才的瞬移发生之后再把过渡加上
      setTimeout(function () {
        // 设置过渡效果
        setStyle(false);
      }, 0);
    }
    else {
      currindex--;
      // 设置过渡效果
      setStyle(false);
    }


    setTimeout(function () {
      throttle_lock = true;
    }, 500);
  }

  // 设置过渡效果
  function setStyle(isClear) {
    if (isClear) {
      o_jptj_bd_ul.style.transition = "none";
      o_jptj_bd_ul.style.transform = "none";
    } else {
      o_jptj_bd_ul.style.transition = "transform 0.5s linear 0s";
      o_jptj_bd_ul.style.transform = "translateX(" + currindex * (offset_length) + "px)";
    }
  }
  o_right_btn.onclick = right_btn_handler;
  o_left_btn.onclick = left_btn_handler;
})();