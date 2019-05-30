'use strict';

// Polyfills
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-matches-polyfill';
import 'whatwg-fetch';
import ES6Promise from "es6-promise";
ES6Promise.polyfill();
import './modules/polyfills/NodeList_SymbolItrerator';

// modules import
import prepareModalDiaolog from './modules/prepareModalDiaolog';
import PagePartSlider from './modules/PagePartSlider';
import Video from './modules/Video';
import ItemSlider from './modules/index_page/ItemSlider';
import openModulesPage from './modules/index_page/openModulesPage';
import difference from './modules/index_page/difference';
import hanson from './modules/index_page/hanson';
import helpForm from './modules/index_page/helpForm';
import timeForm from './modules/index_page/timeForm';

if (!Array.from) Array.from = require('array-from');

document.addEventListener('DOMContentLoaded', () => {

    prepareModalDiaolog();
    
    let pagePartSlider = new PagePartSlider('page', 'page-part');
    pagePartSlider.onSlideChanged = (ind) => {
       if (ind == 2) {
           hanson();
       }
    };

    let video = new Video('.showup__wrapper');
    video.prepare();

    let showupSlider = new ItemSlider('showup','card','card-active');
    showupSlider.showSlide(0);

    let modulesSlider = new ItemSlider('modules','card','card-active');
    modulesSlider.showSlide(0);
    modulesSlider.startAutoplay(4000);

    let feedSlider = new ItemSlider('feed','feed__item', 'feed__item-active');
    feedSlider.showSlide(0);

    openModulesPage();
    difference();
    helpForm('.join .form');
    timeForm('.schedule .form');
});