document.addEventListener('DOMContentLoaded', () => {
  let btn = document.querySelector('.dl');
  btn.addEventListener('click', downloadFile);

  function downloadFile() {

    fetch('1.txt').then((res) => {
        return res.blob();
      }).then(myblob => {

        if (window.navigator.msSaveOrOpenBlob) { // for IE and Edge
          window.navigator.msSaveBlob(myblob, 'temp.txt');
        } else {
          // for modern browsers
          var a = document.createElement('a');
          a.href = window.URL.createObjectURL(myblob);
          a.download = 'temp.txt';
          a.style.display = 'none';
         // document.body.appendChild(a);
          a.click();
        }
      })
      .catch();
  }
});