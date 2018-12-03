import React, { Component } from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar'
import Message from '../Message/Message'
import ComposeForm from '../ComposeForm/ComposeForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Message />
        <ComposeForm />
      </div>
    );
  }
}

export default App;
