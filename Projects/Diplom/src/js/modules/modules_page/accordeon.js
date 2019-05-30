import find from '../findMatchesElement';
const accordeon = ()=>{
  const app = document.querySelector('.moduleapp');
  app.addEventListener('click',(e)=>{
    if(!e.target){
      return;
    }
    let plus;
    if((plus=find(e.target, '.module__info-show .plus'))){
      let elComment = plus.parentNode.parentNode.querySelector('.module__info-comment');//plus.parentElement.parentElement.querySelector('.module__info-comment');
      if(elComment){
        elComment.classList.toggle('collapsed');
      }
    }
  });

};

export default accordeon;