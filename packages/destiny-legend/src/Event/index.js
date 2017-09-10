import React, { Component } from 'react';
import './index.css';

export default class Event extends Component {
  render() {
    return <div>
      <p className="Event_title">{this.props.title}</p>
      <div className="Event_details">
        <p>{this.props.details}</p>
      </div>
    </div>
  }
}
