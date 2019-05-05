// Мобильные события

// touchstart - касание к элементу
// touchmove - коснудся пальцем и перемещает по экрану
// touchend - убрал палец

// touchenter - когда палец зашел на элемент на экране
// touchleave - когда палец покинул элемент

// touchcancel - когда точка соприкосновения больше не регистрируется на элементе (вышли за предел окна например)


window.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");

  box.addEventListener('touchstart', function (e) {
    e.preventDefault();
    console.log("Red box: touch start");
    console.log(e.target);
    console.log(e.touches[0].target);
    console.log(e.changedTouches);
    console.log(e.targetTouches);
  });

  box.addEventListener('touchmove', function (e) {
   e.preventDefault();
   console.log("Red box: touch move " + e.touches[0].pageX);
  });

  box.addEventListener('touchend', function (e) {
    e.preventDefault();
    console.log("Red box: touch end");
  });

});