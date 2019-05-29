const maskInputPhone = (_element, _mask) => {
    
    let setCursorPosition=(pos, elem)=>{
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    const process = ()=>{
        let matrix = _mask; // Маска ввода
        let def = matrix.replace(/\D/g, ""),
            val = _element.value.replace(/\D/g, "");

        if (def.length >= val.length) {
            val = def;
        }
        let iNum = 0,
            cursorPos = 0,
            im = 0;
        _element.value = matrix.replace(/./g, function (a) {
            let numberPlace = /[_\d]/.test(a);
            let maskNumber = /[\d]/.test(a);
            let ch = "";
            if (numberPlace && iNum < val.length) {
                if(maskNumber){
                    ch = a;    
                    iNum++;
                }else{
                    ch = val.charAt(iNum++);
                }
                cursorPos = im + 1;
            } else {
                ch = a;
            }
            im++;
            return ch;
        });

        if (event.type != "blur") {
            setCursorPosition(cursorPos == 0 ? _element.value.length : cursorPos, _element);
        }
    };
    _element.addEventListener('input', process);
    _element.addEventListener('focus', process);
    _element.addEventListener('blur', process);

};

export default maskInputPhone;