function showPagePart(page, _partClass, part) {
    let pageParts = Array.from(page.querySelectorAll(`.${_partClass}`));
    function show(part) {
        page.insertBefore(part, page.children[0]);
        part.classList.add(_partClass + '-active');
    }

    function hide(part) {
        part.classList.remove(_partClass + '-active');
    }
    pageParts.forEach((_p, _i) => {
        part == _p ? show(_p): hide(_p);
    });

}

export default showPagePart;