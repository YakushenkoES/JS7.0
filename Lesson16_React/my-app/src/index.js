import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';
import Button from './Button'

// Функциональный стиль
// function Greet(props) {
//   return(
//     <h1>Hello {props.phrase}! My name is {props.name}.</h1>
//   )
// }
// 
// function GreetAll(){
//   return(
//     <div>
//       <Greet phrase="World" name="Ivan"/>
//       <Greet phrase="World" name="Anna"/>
//       <Greet phrase="World" name="Alex"/>
//     </div>
//   )
// }
//const element = <Greet phrase="World" name="Ivan"/>;
//ReactDOM.render(<GreetAll/>, document.getElementById('root'));


class App extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Clock/>
        <Button/>
      </div>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
