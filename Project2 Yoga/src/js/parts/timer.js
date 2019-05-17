function timer(deadLine){
  //let deadLine = "2019-06-09";

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.now(),
      seconds = t <= 0 ? 0 : Math.floor((t / 1000) % 60),
      minutes = t <= 0 ? 0 : Math.floor((t / 1000 / 60) % 60),
      hours = t <= 0 ? 0 : Math.floor(t / 1000 / 60 / 60);

    return {
      "total": t,
      hours,
      minutes,
      seconds
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {

      function fill2(val) {
        val = (val < 10 ? "0" : "") + val;
        return val;
      }

      let t = getTimeRemaining(endTime);
      hours.textContent = fill2(t.hours);
      minutes.textContent = fill2(t.minutes);
      seconds.textContent = fill2(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock("timer", deadLine);
}

export default timer;
