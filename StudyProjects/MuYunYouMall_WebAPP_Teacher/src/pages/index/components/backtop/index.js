// css
import './backtop.css';

import Backtop from "components/backtop";

const scrollContainer = document.getElementById('index-page');
const backtop = document.getElementById('btn_backtop')

new Backtop(backtop, window.innerHeight, scrollContainer);