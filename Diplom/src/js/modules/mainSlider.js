function mainSlider() {
  let page = document.querySelector('.page'),
    btnsNext = Array.from(page.querySelectorAll('.next')),
    pageParts = Array.from(page.children),
    logos = page.querySelectorAll('.page-part .sidecontrol > a:first-child'),
    N = pageParts.length;

    // Кнопки перехода на следующую страницу
  page.addEventListener('click', (e) => {
    let currbtn;
    function isNextBtn(el) {
      while (el !== null) {
        if (el.matches('.next')) {
          return el;
        } else {
          el = el.parentElement;
        }
      }
    }
    if (e.target && (currbtn = isNextBtn(e.target))) {
      let nextInd = btnsNext.indexOf(currbtn) + 1;
      if (nextInd >= N) {
        nextInd = 0;
      }
      showPagePart(nextInd);
    }
    // Нажатие на логотип
    logos.forEach(el=>{
      el.addEventListener('click', ()=>{
        showPagePart(0);
      });
    });
    
    function showPagePart(ind) {
      if (ind < 0 || ind > N - 1) {
        ind = 0;
      }
      
      function show(part){
        if(part != page.children[0]){
          page.insertBefore(part, page.children[0]);
        }
        part.classList.add('page-part-active');
      }
      function hide(part){
        part.classList.remove('page-part-active');
      }
      pageParts.forEach( (_part, _i) => {
        if(ind==_i){
          show(_part);
        }else{
          hide(_part);
        }
      });
    }
  });
}

export default mainSlider;