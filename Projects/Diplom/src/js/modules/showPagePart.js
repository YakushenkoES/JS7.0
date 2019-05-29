const showPagePart = (page, _partClass, ind) => {
    const pageParts = page.querySelectorAll("."+_partClass);
    
    pageParts.forEach((_p, i) => {
        if (ind == i) {
            _p.classList.add(_partClass + '-active');
        } else {
            _p.classList.remove(_partClass + '-active');
        }
    });

};

export default showPagePart;