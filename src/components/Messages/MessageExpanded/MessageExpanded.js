import React, { Component } from 'react';

class MessageExpanded extends Component {
  render() {
    return (
      <div className="row message read">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star"></i>
            </div>
          </div>
        </div>

        <div className="col-xs-11">
          <span className="label label-warning">dev</span>
          <span className="label label-warning">gschool</span>
          <a href="#">
            Here is some message text that has a bunch of stuff
          </a>
        </div>

      <div className="row message-body">
        <div className="col-xs-11 col-xs-offset-1">
          This is the body of the message.
        </div>
      </div>
    </div>
    );
  }
}

export default MessageExpanded;
