import React from 'react';
import logo from '../../img/logo.svg'
class Logo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="logo">
          <img className="logo-img" src={logo} alt='logo'></img>
          <div className="logo-title">
            <div className ="logo-title-main">granit</div>
            <div className ="logo-title-text">Доставка нерудных материалов</div>
          </div>
        </div>
    )
  }
}


export default Logo;