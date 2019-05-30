import showPagePart from '../showPagePart';
import find from '../findMatchesElement';
class ModulesPagePartSlider {
    constructor(_containerClass, _partClass) {
        this.partClass = _partClass;
        this.page = document.querySelector(`.${_containerClass}`);
        this.btnsPrev = [...this.page.querySelectorAll('.module__info-controls .prev a.prevmodule')];//Array.from(this.page.querySelectorAll('.module__info-controls .prev a.prevmodule'));//
        this.btnsNext = [...this.page.querySelectorAll('.module__info-controls .next a.nextmodule')];//Array.from(this.page.querySelectorAll('.module__info-controls .next a.nextmodule'));//
        this.pageParts = this.page.querySelectorAll("."+this.partClass);
        this.N = this.pageParts.length;
        this.prepare();
    }
    prepare() {
        this.page.addEventListener('click', (e) => {
            let currbtn;
            
            if (e.target && (currbtn = find(e.target, 'a.nextmodule, a.prevmodule'))) {
                e.preventDefault();
                let nextInd = 0;
                if (this.btnsNext.includes(currbtn)) {
                    nextInd = this.btnsNext.indexOf(currbtn) + 1;
                    if (nextInd >= this.N) {
                        nextInd = 0;
                    }
                } else if (this.btnsPrev.includes(currbtn)) {
                    nextInd = this.btnsPrev.indexOf(currbtn) - 1;
                    if (nextInd < 0) {
                        nextInd = this.N - 1;
                    }
                }
                showPagePart(this.page, this.partClass, nextInd);
            }
        });
    }
    openSlide(ind) {
        showPagePart(this.page, this.partClass, ind);
    }

}

export default ModulesPagePartSlider;