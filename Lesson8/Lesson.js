let box = document.querySelector(".box");
let btn = document.querySelector("button");
let widthClient = box.clientWidth,
heightClient = box.clientHeight,
widthOfs= box.offsetWidth,
heightOffset = box.offsetHeight,
widthScroll= box.scrollWidth,
heightScroll = box.scrollHeight;

console.log(`wClient: ${widthClient}; hClient: ${heightClient}`);
console.log(`wOffset: ${widthOfs}; hOffset: ${heightOffset}`);
console.log(`wScroll: ${widthScroll}; hScroll: ${heightScroll}`);

btn.addEventListener("click", function(){
  //box.style.height = box.scrollHeight +"px";
console.log(box.scrollTop);
box.scrollTop=0;
});




console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// Scrolling
console.log(document.documentElement.scrollTop);
scrollBy(0, 200); // редко: относительно текущего положения
scrollTo(0, 200);