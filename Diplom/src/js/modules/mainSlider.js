import showPagePart from './showPagePart';
function mainSlider(_containerClass, _partClass) {
  let page = document.querySelector(`.${_containerClass}`),
    btnsNext = Array.from(page.querySelectorAll('a.next')),
    pageParts = Array.from(page.children),
    logos = page.querySelectorAll( `.${_partClass} .sidecontrol > a:first-child`),
    N = pageParts.length;
    // Нижние кнопки перехода на следующую часть страницы
  page.addEventListener('click', (e) => {

    let currbtn;
    function isNextBtn(el) {
      while (el !== null) {
        if (el.matches('a.next')) {
          return el;
        } else {
          el = el.parentElement;
        }
      }
    }

    if (e.target && (currbtn = isNextBtn(e.target))) {
      e.preventDefault();
      let nextInd = btnsNext.indexOf(currbtn) + 1;
      if (nextInd >= N) {
        nextInd = 0;
      } 
     
      showPagePart(page, _partClass, pageParts[nextInd]);
    }

    // Нажатие на логотип
    logos.forEach(el=>{
      el.addEventListener('click', ()=>{
        showPagePart(page, _partClass, pageParts[0]);
      });
    });
    
   
  });
}

export default mainSlider;