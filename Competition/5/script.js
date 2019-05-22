document.addEventListener("DOMContentLoaded", () => {

  let tags = {};
  let classes = {};

  function scanDOM(el) {

    // Is textnode?
    let isTextNode = el.nodeType == Node.TEXT_NODE;

    // Tags
    let tag = isTextNode ? "text_node" : el.tagName;
    if (tag in tags) {
      tags[tag]++;
    } else {
      tags[tag] = 1;
    }

    // Classes

    if (el.classList !== undefined) {
      for (const cl of el.classList) {
        if (cl in classes) {
          classes[cl]++;
        } else {
          classes[cl] = 1;
        }
      }
    }

    // Children (recursive call)
    for (let e of el.childNodes) {
      scanDOM(e);
    }
  }

  scanDOM(document.documentElement);


  // Console log
  for (const key in tags) {
    if (key == "text_node"){
      console.log(`Текстовых узлов: ${tags[key]}`);
    }
    else{
      console.log(`Тэгов ${key.toLowerCase()}: ${tags[key]}`);
    }
  }
  for (const key in classes) {
    console.log(`Классов ${key}: ${classes[key]}`);
  }

});