import find from './findMatchesElement';
class Video {
    constructor(playBtnContainerSelector) {
        this.player = undefined;
        this.ready = false;
        this.playBtnContainer = document.querySelector(playBtnContainerSelector);
        this.btnsPlay = this.playBtnContainer.querySelectorAll('.play[data-url]');
        this.overlay = document.querySelector('.overlay');
        this.elVideo = this.overlay.querySelector('.video');
        this.btnClose = this.overlay.querySelector('.video .close');
    }
    prepare() {
        this.playBtnContainer.addEventListener('click', (e) => {
            if (!e.target) {
                return;
            }

            let btn;
            if ((btn = find(e.target, '.play[data-url]'))) {
                if (this.ready) {
                    this.currBtnPlay = btn;
                    for (let i = 0; i < this.btnsPlay.length; i++) {
                        if (btn == this.btnsPlay[i]) {
                            this.currBtnPlayIndex = i;
                            break;
                        }
                    }

                    this.elVideo.style.display = 'block';
                    this.overlay.style.display = "flex";
                    let url = btn.dataset.url + '?enablejsapi=1&origin=' + window.location.origin;
                    this.player.loadVideoByUrl(url);
                }
            }
        });

        this.btnClose.addEventListener('click', () => {
            if (this.ready) {
                this.player.stopVideo();
            }
        });

        // Prepare player
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('frame', {
                events: {
                    'onReady': () => {
                        this.ready = true;
                    },
                }
            });
        };
    }
    getVideoDuration() {
        if (this.player && this.ready) {
            return this.player.getDuration();
        }
        return undefined;
    }
    getWhatchedDuration() {
        if (this.player && this.ready) {
            return this.player.getCurrentTime();
        }
        return undefined;
    }
}

export default Video;