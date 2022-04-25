// css
import './header.css'
// 公共头部组件
import Header from "components/header";

import 'components/searchbox';


const scrollContainer = document.getElementById('index-page');
const headerEl = document.querySelector('.header');
new Header(headerEl, 0, scrollContainer);