function tabs(elTab) {

  // Tabs____________________________
  let tab = elTab.querySelectorAll(".info-header-tab"),
    info = elTab.querySelector(".info-header"),
    tabContent = elTab.querySelectorAll(".info-tabcontent");

  switchTab(0);

  function switchTab(ind = 0) {

    if (ind < 0 || ind >= tab.length) {
      return;
    }

    let hide = (el) => {
      el.classList.add('hide');
      el.classList.remove('show');
    };

    let show = (el) => {
      el.classList.add('show');
      el.classList.remove('hide');
    };

    for (let i = 0; i < tabContent.length; i++) {
      i == ind ? show(tabContent[i]) : hide(tabContent[i]);
    }
  }

  info.addEventListener("click", (event) => {
    let target = event.target;

    if (target && target.matches(".info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          switchTab(i);
          break;
        }
      }
    }

  });
}

export default tabs;