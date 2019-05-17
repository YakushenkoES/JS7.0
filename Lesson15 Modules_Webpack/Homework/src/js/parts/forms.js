 // Forms ___________________________
 function forms(forms) {
   // Функция создания элемента со статусом запроса
   function createReqStatusEl(form) {
     let div = document.createElement('div');
     let text = document.createElement('div');
     let img = document.createElement('div');
     div.classList.add('requestStatus');
     text.classList.add('status');
     text.classList.add('requestStatus-status');
     img.classList.add('requestStatus-img');
     div.appendChild(img);
     div.appendChild(text);
     form.appendChild(div);
     return div;
   }

   // Для каждой формы...
   forms.forEach((form) => {

     let statusMessage = createReqStatusEl(form); // Создать элемент статуса запроса

     // Обработать событие отправки формы
     form.addEventListener('submit', function (e) {
       e.preventDefault(); // Отключение событий по умолчанию для ajax запроса

       // Функция создатель промиса ожидания начала ЗАГРУЗКИ
       function waitLoading(_xhr) {
         return new Promise(function (resolve, reject) {
           // Ожидать начала загрузки (или ошибки)
           _xhr.addEventListener('readystatechange', function onWaitLoading() {

             if (_xhr.readyState < 4) { // Loading
               _xhr.removeEventListener('readystatechange', onWaitLoading); // Отписать ЭТОТ обработчик события, он больше не нужен
               resolve(_xhr);
             } else if (_xhr.readyState === 4 && _xhr.status !== 200) { // Error
               reject();
             }
           });
         });
       }

       // Функция создатель промиса ожидания успешного получения ОТВЕТА на запрос
       function waitDone(_xhr) {
         return new Promise(function (resolve, reject) {

           // Ожидать успешного окончания запроса (или ошибки)
           _xhr.addEventListener('readystatechange', function onWaitDone() {
             if (_xhr.readyState === 4) { // Done ждать ТОЛЬКО readyState 4
               if (_xhr.status === 200) { // Done OK
                 _xhr.removeEventListener('readystatechange', onWaitDone); // Отписать ЭТОТ обработчик события, он больше не нужен
                 resolve(_xhr);
               } else { // Done Error
                 reject();
               }
             }
           });

         });
       }

       // Функция послания запроса (возвращает промис ожидания начала загрузки)
       function sendRequest(_data) {
         let xhr = new XMLHttpRequest();
         let prom = waitLoading(xhr); // Создание промиса ожидания начала загрузки
         xhr.open('POST', 'server.php'); // Для случая, когда и страница и php в одном домене
         xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

         let obj = {};
         _data.forEach((value, key) => {
           if (key == 'phone' || key == 'tel') {
             obj[key] = value.replace(/[\( \)_]/g, "");
           } else {
             obj[key] = value;
           }
         });
         let strJSON = JSON.stringify(obj);
         xhr.send(strJSON);

         return prom;
       }

       // Запуск цепочки промисов ajax запроса:
       let message = {
         loading: 'Загрузка',
         success: 'Спасибо! Скоро мы с вами свяжемся!',
         failure: 'Что-то пошло не так...'
       };

       sendRequest(new FormData(form)) // Создание промиса ожидания начала загрузки
         .then((_xhr) => { // Загрузка ответа на запрос пошла
           statusMessage.querySelector('.status').textContent = message.loading;
           statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/loader.gif')";
           return waitDone(_xhr); // Создать и вернуть промис ожидания окончания запроса
         })
         .then((_xhr) => { // Загрузка завершена
           statusMessage.querySelector('.status').textContent = message.success;
           statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/ok.svg')";
         })
         .catch(() => { // Если что-то на каком-то этапе пошло не так
           statusMessage.querySelector('.status').textContent = message.failure;
           statusMessage.querySelector('.requestStatus-img').style.backgroundImage = "url('icons/error.svg')";
         })
         .then(() => { // Finally действия после всего
           clearInputs(form);
         });

     });

     function clearInputs(_form) {
       let inputs = _form.getElementsByTagName('input');
       for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = '';
       }
     }

   });
 }


 export default forms;