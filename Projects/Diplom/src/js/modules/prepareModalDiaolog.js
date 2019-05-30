    // Email no cyrillyc symbols
    const prepareModalDiaolog = () => {

        const overlay = document.querySelector('.overlay');

        overlay.addEventListener('click', (e) => {
            if (!e.target) {
                return;
            }
            
            if (e.target.matches('.close-act')) {
                overlay.style.display = "none";
                let childs = overlay.children;
                for(let i=0; i<childs.length;i++){
                    childs[i].style.display = "none";
                }
            }
        });
    };

    export default prepareModalDiaolog;