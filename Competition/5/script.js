document.addEventListener("DOMContentLoaded", ()=>{
  
  let tags = {};
  let classes = {};

  function scanDOM(el){
    // Tags
    if(el.tagName in tags){
      tags[el.tagName]++;
    }else{
      tags[el.tagName]= 1;
    }

    // Classes
    for (const cl of el.classList) {
      if(cl in classes){
        classes[cl]++;
      }else{
        classes[cl]=1;
      }
    }

    // Children (recursive call)
    for(let e of el.children){
      scanDOM(e);
    }
  }

  scanDOM(document.documentElement);


  // Console log
  for (const key in tags) {
      console.log(`Тэгов ${key.toLowerCase()}: ${tags[key]}`);
  }
  for (const key in classes) {
      console.log(`Классов ${key}: ${classes[key]}`);
  }
 
});