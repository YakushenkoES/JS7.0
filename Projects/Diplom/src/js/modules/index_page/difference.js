const difference = () => {
    const difference = document.querySelector('.difference'),
        offOld = difference.querySelector('.officerold'),
        offNew = difference.querySelector('.officernew');

    [offOld, offNew].forEach((diff) => {
        const cards = diff.querySelectorAll('.officer__card-item.hidden-card'),
            cardAdd = diff.querySelector('.officer__card-item:last-child'),
            btnAdd = cardAdd.querySelector('.plus');
        let hiddenQty = cards.length;

        btnAdd.addEventListener('click', () => {
            if (hiddenQty <= 0) {
                return;
            }
            cards[cards.length - hiddenQty].classList.remove('hidden-card');
            hiddenQty--;
            if (hiddenQty <= 0) {
                cardAdd.classList.add('hidden-card');
            }
        });

    });

};

export default difference;