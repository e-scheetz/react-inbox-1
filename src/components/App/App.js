import React, { Component } from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar'
import MessageList from '../Messages/MessageList/MessageList'

class App extends Component {
  //constructor to set state to empty array to then be filled with get request
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  //Make a get request to display all messages from collective API
  async componentDidMount() {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
    //on status 200 grab the contents inside the api or if get fails log the response
    if (response.status === 200) {
      let resJson = await response.json()
      this.setState({
        ...this.state,
        messages: resJson,
      })
    }else {
      console.log("i'm a dingus", response);
    }
  }

  //delete a a message from collective API by using event handler targeted by the trash icon


  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">Tyler's Inbox</h1>
        </div>
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
