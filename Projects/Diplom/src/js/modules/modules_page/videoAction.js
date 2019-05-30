const videoAction = (video) => {
  video.btnClose.addEventListener('click', () => {

    let nextBtn, currInd = video.currBtnPlayIndex;
    if (currInd!=undefined && currInd % 2 == 0) {
      nextBtn = video.btnsPlay[currInd + 1];
    }
    
    // Сделать доступ ко второму видео только после просмотра 95% видео
    if (nextBtn && nextBtn.classList.contains('blocked')) {
      
      let pcWatched = video.getWhatchedDuration() / video.getVideoDuration() * 100;
      if (!isNaN(pcWatched) && pcWatched > 95) {
          nextBtn.innerHTML = video.btnsPlay[currInd].innerHTML;
          nextBtn.classList.remove('blocked');
          let v2 = nextBtn.parentNode;//nextBtn.parentElement;
          v2.style.filter = "";
          v2.style.opacity = "1.0";
      }
    }

  });

};

export default videoAction;