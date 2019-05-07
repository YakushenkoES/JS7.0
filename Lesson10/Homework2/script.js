window.addEventListener('DOMContentLoaded', function () {
  class Options {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.background = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    createDiv(text) {
      let div = document.createElement('div');
      div.textContent = text;

      let style = [];
      Object.keys(this).forEach(key => {
        style.push(`${key}:${this[key]}; `);
      });
      style = style.join('');

      // camel case to kebab case:
      style = style.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      div.style.cssText = style;
      return div;
    }
  }
  let opt = new Options('100px', '200px', 'lawngreen', '18px', 'center');
  let div = opt.createDiv("asd asd asd asd");

  document.body.appendChild(div);
});