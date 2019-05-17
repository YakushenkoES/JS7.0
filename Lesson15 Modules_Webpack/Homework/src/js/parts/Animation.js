class Animation {
  constructor() {  }

  animate(options) {
    let start = performance.now();
    requestAnimationFrame(function anim(time) {
      let timeFraction = (performance.now() - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      let progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(anim);
      }
    });
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

}

export default Animation;