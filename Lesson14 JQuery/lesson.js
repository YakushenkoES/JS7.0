$(document).ready(function () {

  $('.list-item:first').hover(function () {
    $(this).toggleClass('active');
  });

  $('.list-item:eq(2)').on('click', function () {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:last').on('click', function () {
    console.log($(this));
    $('.image:odd').animate({
        opacity: 'toggle',
        height: 'toggle'
      },
      2000
    );
  });
  
});

// document.querySelectorAll('.sdfsdf').forEach()
// classList
// addEventListener
// $.ajax  - fetch
// animate - css3 , element.animate


// Angular ______________
// 1. Node.js -> npm
// 2. TypedScript
// 3. Webpack
// 4. MVC (model view controller)
// 5. Angular

// React ________________
// 1. Node.js -> npm
// 2. Babel
// 3. JSX
// 4. React
// 5. Webpack

// VUE __________________
// 1. Node.js -> npm
// 2. Babel
// 3. Webpack
