let inputRub = document.getElementById("rub"),
 inputUsd = document.getElementById("usd");
 console.log(inputRub);
 console.log(inputUsd);


inputRub.addEventListener('input', () => {

  let request = new XMLHttpRequest();

  // Сначала обработчики а потом все остальное
  // status код
  // statusText текст ответа
  // response тело запроса
  // responseText текст ответа сервера
  // readyState текущее состояние запроса

  request.addEventListener('readystatechange', function(){
    if(request.readyState === 4 && request.status === 200){ // Done, состояние сервера
      let data = JSON.parse(request.response);
      inputUsd.value = inputRub.value / data.usd;
    }else{
      inputUsd.value = "Что-то пошло не так!";
    }
  });
  
  request.open('GET', 'current.json'); //request.open(method, url, async, login, pass);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  
  request.send();
});



//let options = {
//  width: 1366,
//  height: 768,
//  background: 'red',
//  font:{
//    size: '16px',
//    color: '#fff'
//  }
//};
//console.log(options);
//let str = JSON.stringify(options);
//console.log(str);
//console.log(JSON.parse(str));