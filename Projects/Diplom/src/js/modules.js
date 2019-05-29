'use strict';

// Polyfills
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-matches-polyfill';
import 'url-polyfill';
if (!Array.from) Array.from = require('array-from');
import './modules/polyfills/number_isInteger';

// fetch
import 'whatwg-fetch';
//  Promise в fetch
import ES6Promise from "es6-promise";
ES6Promise.polyfill();
import './modules/polyfills/array_includes';
import './modules/polyfills/NodeList_SymbolItrerator';


import prepareModalDiaolog from './modules/prepareModalDiaolog';
import Video from './modules/Video';
import videoAction from './modules/modules_page/videoAction';
import PagePartSlider from './modules/PagePartSlider';
import ModulesPagePartSlider from './modules/modules_page/ModulesPagePartSlider';
import accordeon from './modules/modules_page/accordeon';
import prepareDownloadFile from './modules/modules_page/prepareDownloadFile';


document.addEventListener('DOMContentLoaded', () => {
  prepareModalDiaolog();
  let video = new Video('.moduleapp');
  video.prepare();

  videoAction(video); // Сделать доступ ко второму видео только после просмотра 95% видео

  new PagePartSlider('moduleapp', 'module');
  let modulePagePartSlider = new ModulesPagePartSlider('moduleapp', 'module');

  // Открыть страницу на соответствующе слайде
  var url = new URL(window.location.href);
  var mdlInd = url.searchParams.get("module");
  if (mdlInd !== null && Number.isInteger(+mdlInd)) {
    modulePagePartSlider.openSlide(mdlInd - 1);
  } else {
    modulePagePartSlider.openSlide(0);
  }

  accordeon();

  prepareDownloadFile();

});