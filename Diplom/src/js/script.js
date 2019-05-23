'use strict';

import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-matches-polyfill';
if (!Array.from) Array.from = require('array-from');

import mainSlider from './modules/mainSlider';


document.addEventListener('DOMContentLoaded', ()=>{
  mainSlider();
});
