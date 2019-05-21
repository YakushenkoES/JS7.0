import React from 'react';
import Logo from './Logo';
import Contacts from './Contacts';
import Nav from './Nav';
import './Header.scss';
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="header content">
        <Logo/>
        <Contacts/>
         <Nav/> 
         
      </div>
      
    )
  }
}

export default Header;
/**/