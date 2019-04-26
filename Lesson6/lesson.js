let btn = document.querySelectorAll("button"),
    wrap = document.querySelector(".wrapper"),
    link = document.querySelector("a");

// Этим способом можем назначить ТОЛЬКО 1 обработчик
// btn[0].onclick = function () {
//   alert("Вы нажали первую кнопку");
// };
// btn[0].onclick = function () {
//   alert("Вы опять нажали первую кнопку");
// };


// Второй способ МНОГО обрабочиков
btn[0].addEventListener("click", function (event) {
    //console.log(event);
    //let target = event.target;
    //target.style.display = 'none';
    console.log("Произошло событие: " + event.type + " на элементе " +
        event.target);

});

wrap.addEventListener('click', function(){
    console.log("Произошло событие: " + event.type + " на элементе " +
    event.target);
} );

link.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Произошло событие: " + e.type + " на элементе " +
    e.target);
});


// Назначение обработчика на массив элементов
btn.forEach(function(item){
    item.addEventListener("mouseleave", function(){
        console.log("Вышли!");
    });
});

// btn[0].addEventListener("click", function () {
//   alert("Вы опять нажали первую кнопку addEventListener");
// });

// btn[0].addEventListener("mouseenter", function () {
//   alert("Вы навели мышь на первую кнопку");
// });