const openModulesPage = () => {
    const plus = document.querySelector('.showup .plus');

    const open = (ind) => {
        let pageName = 'index.html';
        let urlstr = window.location.href;
        urlstr = urlstr.substr(0, urlstr.lastIndexOf(pageName)) + 'modules.html';
        urlstr += `?module=${ind+1}`;
        window.open(urlstr, '_self');
    };
    plus.addEventListener('click', () => {
        open(0);
    });
};

export default openModulesPage;