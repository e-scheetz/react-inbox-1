import React, { Component } from 'react';
import './App.css';
import Toolbar from '../Toolbar/Toolbar'
import MessageList from '../Messages/MessageList/MessageList'
import Message from '../Messages/Message/Message'

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
        messages: resJson.sort((a,b) => {return a.id > b.id})
      })
    }else {
      console.log("i'm a dingus", response);
    }
  }

  //check to see if a message was checked
  messageChecked = (id) => {
    const filteredMessages = this.state.messages.filter((message) => (message.id === id))[0]
    const remainingMessages = this.state.messages.filter((message) => (message.id !== id))

    const newState = [...remainingMessages, filteredMessages].sort((a,b) => {return a.id > b.id})

    this.setState({
      ...this.state,
      messages: newState,
    })

  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">Tyler's Inbox</h1>
        </div>
        <Toolbar />
        <MessageList messages={this.state.messages} messageChecked={this.messageChecked.bind(this)}/>
      </div>
    );
  }
}

export default App;
