// Get elements

let elBox = document.getElementById("box"),
  elBtns = document.getElementsByTagName("button"),
  elCircles = document.getElementsByClassName("circle"),
  elHearts = document.querySelectorAll(".wrapper .heart"),
  elOneHeart = document.querySelector(".wrapper.heart"),
  elWrapper = document.querySelector(".wrapper");

// Change style
elBox.style.backgroundColor = "lawngreen";
elBtns[1].style.borderRadius = '100%';

elCircles[0].style.backgroundColor = 'red';
elCircles[1].style.backgroundColor = 'yellow';
elCircles[2].style.backgroundColor = 'green';

for (let i = 0; i < elHearts.length; i++) {
  elHearts[i].style.backgroundColor = 'blue';
}

elHearts.forEach(function(val, i, array){
  val.style.backgroundColor = 'magenta';
});

// Create elements add classes
let div = document.createElement("div"),
    text = document.createTextNode("Тут был я");

div.classList.add('black');

document.body.insertBefore(div, elCircles[1]);
document.body.removeChild(elCircles[2]);
elWrapper.removeChild(elHearts[2]);

document.body.replaceChild(elCircles[0], elBtns[1]);
console.log(div);


// Add text or html to elements
div.innerHTML = "<h1>Hello world!!!</h1>";
div.textContent = "<h1>Hello world!!!</h1>";
div.innerText = "<h1>Hello world!!!</h1>";
