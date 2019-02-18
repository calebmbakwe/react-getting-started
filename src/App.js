import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
      + {this.props.incrementValue}
      </button>
    )
  }
}

const Card = (props) => {
  return (
    <div>
      <img alt="profile pic" style={{width: '75px'}} src={props.avatar} />
      <div style={{display: 'inline-block', marginLeft:10, textAlign: 'left'}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
        <div>{props.email}</div>
      </div>
    </div>
  )
}

class Form extends Component {
  state = {
    userName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://api.github.com/users/" + this.state.userName).
      then((response) => response.json()).
      then((responseJSON) => {
        console.log(this.state.userName, responseJSON);
        this.props.updateCard({
          name: responseJSON.name,
          email: responseJSON.email,
          avatar: responseJSON.avatar_url,
          company: responseJSON.company
        });
        this.setState({
          userName: ""
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Github username" required value={this.state.userName} 
          onChange={(event) => this.setState({userName: event.target.value})} />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.email} {...card} /> )}
    </div>
  )
}

const Result = (props) => {
  return <div>{props.counter}</div>
};

class App extends Component {
  state = {
    counter: 0,
    cards: [
      // {
      //   name: "Caleb Mbakwe",
      //   email: "caleboau2012@gmail.com",
      //   avatar: "https://avatars0.githubusercontent.com/u/2228923?v=4",
      //   company: "Body & Soul"
      // },
      {
        name: "Caleb Mbakwe",
        email: "caleb.mbakwe@andela.com",
        avatar: "https://avatars0.githubusercontent.com/u/34301229?v=4",
        company: "Andela"
      }
    ]
  };

  addNewCard = (card) => {
    this.setState((prevState) => ({
        cards: prevState.cards.concat(card)
    }))
  }

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </header>

        <div>
          <Form updateCard={this.addNewCard} />
          <CardList cards={this.state.cards}/>
        </div>
      </div>
    );
  }
}

export default App;
