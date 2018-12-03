import React, { Component } from 'react';

class Message extends Component {
  render() {

    const { message: { subject, read, starred, labels, body, id }} = this.props

    return (
      <div className="row message read">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="message-contents">
          <div className="subject" id={id}>
            <span className="label label-warning">{labels}</span>
            <span className="label label-warning">{labels}</span>
            {subject}
          </div>
          <p className="body">
            <li>
            {body}
            </li>
          </p>
        </div>
      </div>
    );
  }
}

export default Message;
