import React from 'react';

class Contacts extends React.Component{
 
  render(){
    return(
      <div className="contacts">
        <div className="contacts-phone">
          <a  href="tel:+78003421333">8 800 342-13-33</a>
          <div className="contacts-phone-desc">Бесплатный звонок по России</div>
        </div>
        <div className="contacts-call">
          <button className="btn btn-call">Обратный звонок</button>
        </div>
      </div>
    )
  }
}


export default Contacts;