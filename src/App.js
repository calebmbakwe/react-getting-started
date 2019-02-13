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

const Result = (props) => {
  return <div>{props.counter}</div>
};

class App extends Component {
  state = {
    counter: 0
  };

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
      </div>
    );
  }
}

export default App;
