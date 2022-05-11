// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    showIcon: true,
    "swiperList": [{
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/TS.jpeg"
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/css.jpeg"
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/framework.jpeg"
      }
    ],
    "courses": [{
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/graduate.jpeg",
        "title": "Vue2.5开发去哪儿网App 从零基础入门到实战项目",
        "promotion": false,
        "price": 266,
        "level": "中级",
        "sales": 8422,
        "id": 1
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/ko2.jpeg",
        "title": "Activiti7精讲+Java通用型工作流开发实战",
        "promotion": true,
        "price": 298,
        "notice": "限时优惠",
        "level": "初级",
        "sales": 131,
        "id": 2
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/micro.jpeg",
        "title": "2020 重学C++ 重构你的C++知识体系",
        "promotion": false,
        "price": 198,
        "level": "中级",
        "sales": 1336,
        "id": 3
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/react.jpeg",
        "title": "全面系统Python3.8入门+进阶  (程序员必备第二语言)",
        "promotion": false,
        "price": 198,
        "level": "初级",
        "sales": 11826,
        "id": 4
      },
      {
        "imgUrl": "https://imooc-micro-app.oss-cn-beijing.aliyuncs.com/scrm.jpeg",
        "title": "前端框架及项目面试 聚焦Vue/React/Webpack",
        "promotion": false,
        "price": 399,
        "level": "中级",
        "sales": 1401,
        "id": 5
      }
    ]
  },
  // headerinput框输入的时候触发的事件（将输入框中的icon隐藏）
  handleInputChange(event) {
    let inputVal = event.detail.value;
    this.setData({
      showIcon: inputVal ? false : true
    })
  }
})