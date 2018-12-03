import React, { Component } from 'react';
import Message from '../Message/Message'

class MessageList extends Component {
  render() {
    const { messages, messageChecked } = this.props
    return (
      <div>
        <div className="row-message">
          <div className="col-xs-1">
            <div className="row">
            </div>
          </div>
          <div className="col-xs-11">
            {messages.map((message, index) => ( <Message key={ index } message={message} messageChecked={messageChecked} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageList;
