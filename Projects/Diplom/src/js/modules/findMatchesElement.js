const find = (el, pattern) => {
    while (el !== null && el !== undefined && el.tagName != 'HTML') {
        if (el.matches(pattern)) {
            return el;
        } else {
            el = el.parentNode;  //el = el.parentElement;
        }
    }
};

export default find;