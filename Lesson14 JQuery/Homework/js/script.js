'use strict';

$(document).ready(function () {

  // Set visibility
  $('.modal').css({
    display: "block",
  });

  // Получить высоту модального окна вместе с box shadow
  let modal = $('.modal')[0];
  let height = modal.offsetHeight +
    parseFloat(getComputedStyle(modal).marginTop) +
    parseFloat(getComputedStyle(modal).boxShadow.split(')')[1].trim().split(' ')[2]); // добыть box shadow radius

    $('.modal').css({
      top: -height + "px" // Установить модальное окно сверху
    });

  $('.main_btna').on('click', showModal);
  $('.main_nav a:eq(1)').on('click', showModal);
  $('.main_btn.contact').on('click', showModal);

  function showModal() {
    $('.overlay')
      .animate({
          opacity: 'toggle',
        },
        2000
      );

    $('.modal')
      .css({ // Начальное состояние перед анимацией
        left: "-100px",
        top: -height + "px",
        width: '40%'
      }).animate({ // Анимации
        top: '0rem',
        left: `0px`
      }, 2000)
      .animate({
        width: '42%'
      }, 150)
      .animate({
        width: '40%'
      }, 150);
  }

  $('.close').on('click', hideModal);

  function hideModal() {
    $('.overlay')
      .animate({
          opacity: 'toggle',
        },
        2000
      );

    $('.modal').animate({
        top: -height + "px",
        left: `100px`
      },
      2000
    );
  }



  // Form
  $('.contactform_select').on('submit', function (e) {
    e.preventDefault();
    let fdata = new FormData(document.forms[0]);
    fdata = new FormData($(this)[0]);
    $.ajax({
      url: 'http://yoga.local/server.php',
      method: "POST",
      contentType: "application/x-www-form-urlencoded",
      data: fdata,
      processData: false,
      success: function () {
        alert('Все отлично данные отправились!');
        hideModal();
      }
    });
  });
});