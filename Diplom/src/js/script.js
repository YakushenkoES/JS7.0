'use strict';
// npx webpack --config webpack.config-expert.js
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-matches-polyfill';
if (!Array.from) Array.from = require('array-from');

import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', ()=>{
  slider();
});