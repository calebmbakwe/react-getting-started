import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body.js';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='row'>
      <div className='jumbotron col-12'>
        <h1>Demo of Where we are on React</h1> 
        <p>Click to select the option that best answers the question</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='row'>
      <div className='col-12'>
      <br />
      <p><Link to='/add'>Add a chik to the list</Link></p>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Body data={this.props.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
