import React from 'react';
import logo from '../../../img/logo.svg'
class Logo extends React.Component{
  
  render(){
    return(
      <div className="logo">
        <a href="#">
          <img className="logo-img" src={logo} alt='logo'></img>
            <div className="logo-title">
              <div className ="logo-title-main">granit</div>
              <div className ="logo-title-text">Доставка нерудных материалов</div>
            </div>
        </a>
      </div>
    )
  }
}


export default Logo;