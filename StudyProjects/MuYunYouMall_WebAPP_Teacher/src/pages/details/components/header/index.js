// css
import './header.css';
import Header from 'components/header';

const scrollContainer = document.getElementById('details-page');
const headerEl = document.querySelector('.header');
new Header(headerEl, 0, scrollContainer);