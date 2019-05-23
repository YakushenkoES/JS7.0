function video() {



  let btnsPlay = document.querySelectorAll('.play[data-url]'),
    overlay = document.querySelector('.overlay'),
    video = document.getElementById('frame'),
    btnClose = overlay.querySelector('.video .close');
  let player;
  btnsPlay.forEach((btn) => {
    btn.addEventListener('click', function () {
      overlay.style.display = "flex";
      let url = this.dataset.url + '?enablejsapi=1&origin=' + window.location.origin;
      console.log('url :', url);
      video.setAttribute('src', url);

      player = new YT.Player('frame', {
        events: {
          'onReady': onPlayerReady,
         // 'onStateChange': onPlayerStateChange
        }
      });
    });
  });

  //window.onYouTubeIframeAPIReady = function () {  }

  function onPlayerReady() {
    player.playVideo();
  }

//  function onPlayerStateChange() {}

  btnClose.addEventListener('click', () => {
    if (player) {
      player.stopVideo();
    }
    overlay.style.display = "none";
  });
}

export default video;