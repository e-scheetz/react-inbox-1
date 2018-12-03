import React, { Component } from 'react';
import Message from '../Message/Message'

class MessageList extends Component {
  render() {

    const { messages } = this.props

    return (
      <div className="row message read">
        <div className="col-xs-1">
          <div className="row">
          </div>
        </div>
        <div className="col-xs-11">
          {messages.map((message, index) => ( <Message key={ index } message={message} />))}
        </div>
      </div>
    );
  }
}

export default MessageList;
