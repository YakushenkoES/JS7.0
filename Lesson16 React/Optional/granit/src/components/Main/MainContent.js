import React from 'react';
import NavItem from './Header/NavItem'
class MainContent extends React.Component{
  
  render(){
    return(
      <div className="main">
       <div className="main-content content">
         <h1 className="main-header">быстрая Доставка</h1>
         <div className="main-header-desc">
           <p>бетона, щебня, песка</p>
           <p>и других нерудных материалов</p>
           <p>по Москве и Московской области</p>
         </div>
         <div className="main-action">
           <button className="btn main-action-btn">Подробнее о доставке</button>
           <span>или</span>
           <NavItem href="#" title="перейти в каталог"/>
         </div>
       </div>
     </div>
      
    )
  }
}


export default MainContent;
