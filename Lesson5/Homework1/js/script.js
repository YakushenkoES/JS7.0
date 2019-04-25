// Восстановить порядок в меню, добавить пятый пункт
let elMenu = document.querySelector("ul.menu"),
  elMenuItems = elMenu.getElementsByTagName("li");

elMenu.insertBefore(elMenuItems[2], elMenuItems[1]);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = "url(img/apple_true.jpg) center center/ cover no-repeat";

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";

// Удалить рекламу со страницы
document.querySelectorAll(".adv").forEach((el) => el.parentNode.removeChild(el));

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let userAns = prompt("Какое ваше отношение к технике Apple?", "Нормальное");
while (!(typeof (userAns) === "string" && userAns.trim().length > 0)) {
  userAns = prompt("И все же... какое ваше отношение к технике Apple?", "Нормальное");
}
let elAns = document.createTextNode(userAns);
document.getElementById("prompt").appendChild(elAns);