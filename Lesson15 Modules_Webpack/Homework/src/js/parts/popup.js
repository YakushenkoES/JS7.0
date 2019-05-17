  // Popup___________________________
  function popup() {
    let moreBtns = document.querySelectorAll(".more, .description-btn"),
      overlay = document.querySelector(".overlay"),
      close = document.querySelector(".popup-close");

    let currDescBtn;
    moreBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
        currDescBtn = this;
      });
    });

    close.addEventListener("click", () => {
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
      if (currDescBtn != undefined) {
        currDescBtn.classList.remove("more-splash");
      }
    });
  }

  export default popup;
  