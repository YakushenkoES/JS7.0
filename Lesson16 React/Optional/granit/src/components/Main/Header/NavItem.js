import React from 'react';

class NavItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <a href={this.props.href}>{this.props.title}</a>
    )
  }
}

export default NavItem;