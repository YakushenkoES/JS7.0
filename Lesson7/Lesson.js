"use strict";
//
//// timeout
//let timerID = setTimeout(sayHello, 2000);
//clearTimeout(timerID);
//
//function sayHello() {
//  alert("Hello world");
//}
//
//// time interval
//let timerID2 = setInterval(sayHello2, 2000);
//clearInterval(timerID2);
//
//function sayHello2() {
//  console.log("Hello world");
//}
//
//
//// Рекурсивнфй вызов setTimeout
//let timerId3 = setTimeout(function log() {
//  console.log("Hello");
//  setTimeout(log, 1500);
//});


let btn = document.querySelector(".btn"),
  elem = document.querySelector(".rec");

function myAnimation() {
  let pos = 0,
    boxW = 400,
    recW = 100;
  let id = setInterval(frame, 10);

  function frame() {
    if (pos == boxW - recW){
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);


// Делегирование

let btnBlock = document.querySelector(".btn-block"),
  btns = document.getElementsByTagName("button");

  btnBlock.addEventListener("click", function(event){
      //if(event.target && event.target.tagName == "BUTTON" && event.target.classList.contains("first"))
      if(event.target && event.target.matches('button.first'))
      {
        console.log("Hello first");
        console.log(event.target.matches('button.first'));
      }
      else{
        console.log(event.target);
      }
  });