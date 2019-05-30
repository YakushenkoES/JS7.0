const hanson = () => {
    const el = document.querySelector('.hanson');
    let shown = false;
    if (!shown) {
        setTimeout(() => {
            el.classList.add('hanson-shown');
            shown = true;
        }, 3000);
    }
};
export default hanson;