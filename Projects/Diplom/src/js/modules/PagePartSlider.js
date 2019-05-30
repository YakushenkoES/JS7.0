import showPagePart from './showPagePart';
import find from './findMatchesElement';
//import './polyfills/NodeList_SymbolItrerator';
class PagePartSlider {
    constructor(_containerClass, _partClass) {
         
        this.partClass = _partClass;
        this.page = document.querySelector(`.${_containerClass}`);
        this.btnsDownNext = [...this.page.querySelectorAll('a.next')];//Array.from(this.page.querySelectorAll('a.next'));//
        this.pageParts = this.page.querySelectorAll("."+this.partClass);
        this.N = this.pageParts.length;
        this.prepare();
    }
    prepare(){
        // Нижние кнопки перехода на следующую часть страницы
        this.page.addEventListener('click', (e) => {
            if (!e.target) {
                return;
            }
            let currbtn;
            if ((currbtn = find(e.target, 'a.next'))) { // Next down

                e.preventDefault();
                let nextInd = this.btnsDownNext.indexOf(currbtn) + 1;
                if (nextInd >= this.N) {
                    nextInd = 0;
                }
                showPagePart(this.page, this.partClass, nextInd);
                this.slideChanged(nextInd);
                
            } else if (find(e.target, 'a.page-part-logo')) { // Logo
                showPagePart(this.page, this.partClass, 0);
                this.slideChanged(0);
            }

        });
    }
    slideChanged(index){
        if(this.hasOwnProperty('onSlideChanged')){
            this.onSlideChanged(index);
        }
    }


}
export default PagePartSlider;