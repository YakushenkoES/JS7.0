import React from 'react';
import Header from '../Header/Header'
import './Main.scss';
import MainContent from './MainContent';
class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <main >
        <Header/>
         <MainContent/> 
      </main>
    )
  }
}

export default Main;