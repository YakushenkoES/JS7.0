document.addEventListener("DOMContentLoaded", function () {

  let ansEl = document.querySelector("#time");
  setInterval(updateTime, 1000);


  function updateTime() {
    let dt = new Date(),
    hour = fill2(dt.getHours()),
      mnts = fill2(dt.getMinutes()),
      scnds = fill2(dt.getSeconds());

    let strTime = `${hour}:${mnts}:${scnds}`;

    function fill2(val) {
      val = (val < 10 ? "0" : "") + val;
      return val;
    }

    ansEl.textContent = strTime;
  }




});