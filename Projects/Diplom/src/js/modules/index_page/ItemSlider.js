class ItemSlider {
    constructor(pagePart, itemClass, activeItemClass) {
        this.activeItemClass = activeItemClass;
        this.slider = document.querySelector(`.${pagePart}__slider`);
        this.sliderContent = document.querySelector(`.${pagePart}__content-slider`);
        this.prev = document.querySelector(`.${pagePart} .slick-prev`);
        this.next = document.querySelector(`.${pagePart} .slick-next`);
        this.cards = this.slider.querySelectorAll("."+itemClass);
        
        this.cardsPos = [...this.cards].map((c) => {//Array.from(this.cards).map((c) => {//
           return  c.offsetLeft;
        });
        this.N = this.cards.length;
        this.currIndex = 0;
        this.timer = undefined;
       this.prepare();
    }
    prepare() {
        this.prev.addEventListener('click', () => {
           this.showSlide(--this.currIndex);
        });
        this.next.addEventListener('click', () => {
           this.showSlide(++this.currIndex);
        });
    }
    showSlide(index) {
        let show = (_card) => {
            _card.classList.add(this.activeItemClass);
        };
        let hide = (_card) => {
            _card.classList.remove(this.activeItemClass);
        };

        if (index < 0) {
            index = this.N - 1;
        } else if (index >= this.N) {
            index = 0;
        }
        this.currIndex = index;
        //let sh =  gethis.cards[this.currIndex].getBoundingClientRect().left-this.sliderContent.getBoundingClientRect().left;
        this.sliderContent.style.left = (-this.cardsPos[this.currIndex] ) + "px";//-sh + "px";//
        this.cards.forEach((_card, _i) => {
            if (this.currIndex == _i) {
                show(_card);
            } else {
                hide(_card);
            }
        });
    }
    startAutoplay(interval) {
        this.stopAutoplay();
        this.timer = setInterval(() => {
            this.showSlide(++this.currIndex);
        }, interval);
    }

    stopAutoplay() {
        if (this.timer !== undefined) {
            clearInterval(this.timer);
        }
    }

}

export default ItemSlider;