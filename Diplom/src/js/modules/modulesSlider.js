import showPagePart from './showPagePart';

function modulesSlider(_containerClass, _partClass) {

    let page = document.querySelector(`.${_containerClass}`),
        btnsPrev = Array.from(page.querySelectorAll('.module__info-controls .prev a.prevmodule')),
        btnsNext = Array.from(page.querySelectorAll('.module__info-controls .next a.nextmodule')),
        pageParts = Array.from(page.children),
        N = pageParts.length;
    page.addEventListener('click', (e) => {

        let currbtn;
        if (e.target && (currbtn = isNavBtn(e.target))) {
            e.preventDefault();
            let nextInd = 0;
            if (btnsNext.includes(currbtn)) {
                nextInd = btnsNext.indexOf(currbtn) + 1;
                if (nextInd >= N) {
                    nextInd = 0;
                }
            } else if(btnsPrev.includes(currbtn)){
                nextInd = btnsPrev.indexOf(currbtn) - 1;
                if (nextInd < 0) {
                    nextInd = N-1;
                }
            }
            showPagePart(page, _partClass, pageParts[nextInd]);
        }

        function isNavBtn(el) {
            while (el !== null) {
                if (el.matches('a.nextmodule, a.prevmodule')) {
                    
                    return el;
                } else {
                    el = el.parentElement;
                }
            }
        }
    })
}

export default modulesSlider;