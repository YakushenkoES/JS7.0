import React from 'react';
import NavItem from './NavItem';
class Nav extends React.Component{
 
  render(){
    return(
      <nav className='main-nav'>
          <NavItem href="#" title="Главная"/>
          <NavItem href="#" title="Каталог"/>
          <NavItem href="#" title="Услуги"/>
          <NavItem href="#" title="Доставка"/>
          <NavItem href="#" title="О компании"/>
          <NavItem href="#" title="Контакты"/>
      </nav>
    )
  }
}

export default Nav;