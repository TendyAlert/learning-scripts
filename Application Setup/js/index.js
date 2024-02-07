import getDateString from './date.js';
import '../styles/style.scss'
document
    .querySelector('.js-content')
    .innerHTML = `It's ${ getDateString() }`;