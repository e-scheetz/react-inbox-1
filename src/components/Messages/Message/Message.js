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
        <div className="col-xs-11"
            id={id}>{subject} <br/> {body}
        </div>
      </div>
    );
  }
}

export default Message;
