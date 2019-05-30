import find from '../findMatchesElement';
//import 'url-polyfill';
const prepareDownloadFile = ()=>{
  const app = document.querySelector('.moduleapp');
  app.addEventListener('click',(e)=>{
    if(!e.target){
      return;
    }
    let download;
    if( (download = find(e.target, 'div.download[data-filename]')) ){
      let filename = download.dataset.filename;
        fetch(filename).then((res) => {
            return res.blob();
          }).then(myblob => {
    
            if (window.navigator.msSaveOrOpenBlob) { // for IE and Edge
              window.navigator.msSaveBlob(myblob, filename);
            } else {
              // for modern browsers
              var a = document.createElement('a');
              a.href = window.URL.createObjectURL(myblob);
              a.download = filename;
              a.style.display = 'none';
              a.click();
            }
          })
          .catch();
      
    }

  });
};

export default prepareDownloadFile;