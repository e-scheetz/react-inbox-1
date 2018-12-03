import React, { Component } from 'react';

class Message extends Component {
  render() {

    const { message: { subject, labels, body, id }, messageChecked, message } = this.props

    return (
      <div className="row-message">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2" >
              <input type="checkbox" onClick={()=>messageChecked(message.id)}/>
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="message-contents">
          <div className="subject" id={id}>
            <span className="label label-warning">{labels[0]}</span>
            <span className="label label-warning">{labels[1]}</span>
            {subject}
          </div>
          <p className="body">
            {body.isHidden}
          </p>
        </div>
      </div>
    );
  }
}

export default Message;
