window.addEventListener("DOMContentLoaded", function () {

  let elCars = document.getElementById("cars"),
    elType = document.getElementById("country");

  elType.addEventListener('change', getCars);
  getCars();

  function showCars(cars) {
    elCars.innerHTML = '';
    let country = elType.options[elType.selectedIndex].value;
    if (cars === undefined) {
      return;
    }
    cars.filter((car) => {
      return country === "" || car.category === country;
    }).forEach(car => {
      createCarElement(car);
    });
  }

  function createCarElement(car) {
    let desc = `
      <h2 class="car-header">${car.name}</h2>
      <img src="${car.img}" alt="${car.name}" class="car-image">
      <div class="car-param car-country">
        <span class="car-param-label">Страна:</span>
        <span class="car-param-value">${car.category}</span>
      </div>
      <div class="car-param car-price">
        <span class="car-param-label">Цена:</span>
        <span class="car-param-value">${car.price} $</span>
      </div>
      <p class="car-desc">${car.description}</p>
    `;

    let elCar = document.createElement("div");
    elCar.classList.add("car");
    elCar.innerHTML = desc;

    elCars.appendChild(elCar);
  }

  function getCars() {
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function () {
      if (request.readyState === 4 && request.status === 200) { // Done, состояние сервера
        let data = JSON.parse(request.response);
        showCars(data.cars);
      } else {
        elCars.innerHTML = '';
      }
    });

    request.open('GET', 'cars.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
  }
});