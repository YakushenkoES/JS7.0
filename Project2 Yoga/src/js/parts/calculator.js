// Calculator ___________________________

import Anim from './Animation';
function calculator(elCalculator) {
  let anim = new Anim();
  let prepareValue = val => val.replace(/^0+|[^0-9]+/g, ""); // Убрать все не цифры и нули в начале} 
  let getPlaceCoeff = () => place.options[place.selectedIndex].value;

  let calculatorInputs = elCalculator.querySelectorAll('.counter-block-input'),
    persons = calculatorInputs[0],
    days = calculatorInputs[1],
    place = elCalculator.querySelector('#select'),
    totalValue = elCalculator.querySelector('#total'),
    personsSum,
    daysSum,
    total = 0,
    preTotal = 0,
    coeff = getPlaceCoeff();

  totalValue.textContent = 0;

  days.addEventListener('input', function () {
    this.value = prepareValue(this.value);
    daysSum = this.value.length ? +this.value : undefined;
    calcTotal();
  });
  persons.addEventListener('input', function () {
    this.value = prepareValue(this.value);
    personsSum = this.value.length ? +this.value : undefined;
    calcTotal();
  });

  place.addEventListener('change', () => {
    coeff = getPlaceCoeff();
    calcTotal();
  });

  function calcTotal() {
    preTotal = total;
    total = (daysSum * personsSum) * 1000 * coeff;
    if (isNaN(total)) {
      total = 0;
    }
    anim.animate({
      duration: 1000,
      timing: anim.easeInOutCubic,
      draw: drawCalcRes
    });
  }
  // Animation
  function drawCalcRes(progress) {
    let from = preTotal;
    let to = total;
    let delta = to - from;
    totalValue.textContent = Math.round((from + delta * progress) / 100) * 100;
  }

}

export default calculator;