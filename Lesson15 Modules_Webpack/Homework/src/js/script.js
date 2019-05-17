
//Polyfills
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'element-matches-polyfill';
if (!Array.from) Array.from = require('array-from');

// Modules
import tabs from './parts/tabs';
import timer from './parts/timer';
import popup from './parts/popup';
import maskInputPhone from './parts/phonemask';
import calculator from './parts/calculator';
import slider from './parts/slider';
import forms from './parts/forms';


window.addEventListener('DOMContentLoaded', () => {

  'use strict';
 
  tabs(document.querySelector(".info"));
  timer("2019-06-09");
  popup();
  maskInputPhone(document.querySelectorAll('input[type=tel]'));
  slider(document.querySelector(".slider"));
  calculator(document.querySelector(".counter"));
  forms(document.querySelectorAll("form.main-form, form#form"));

});