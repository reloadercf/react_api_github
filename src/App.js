import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Result from './components/Result'
import CardList from './Card/CardList'
import Form from "./Card/Form";


class App extends Component {
  //state={counter:0}
  //incrementCounter=(incrementValue)=>{
    //this.setState((prevState)=>({
      //counter: prevState.counter+incrementValue
    //}));
//<Button incrementValue={1} onClickFuntion={this.incrementCounter}/>
//<Button incrementValue={5} onClickFuntion={this.incrementCounter}/>
//<Button incrementValue={10} onClickFuntion={this.incrementCounter}/>
//<Button incrementValue={100} onClickFuntion={this.incrementCounter}/>
//<Result counter={this.state.counter}/>
  //}

    state = {
        cards:[

        ]
    };

    addNewCard=(cardInfo)=>{
        this.setState(prevState=>({
            cards:prevState.cards.concat(cardInfo)
        }));
    };

    render() {


    return (
      <div className="App">
          <Form onSubmit={this.addNewCard}/>
          <CardList cards={this.state.cards} />

      </div>
    );
  }
}

export default App;
