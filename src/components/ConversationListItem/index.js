import React, { Component } from 'react';
import shave from 'shave';
import clip2 from './clip2.png';
import './ConversationListItem.css';

export default class ConversationListItem extends Component {
  componentDidMount() {
    shave('.conversation-snippet', 20);
  }

  render() {
    const { subject, time, text, status } = this.props.data;
    console.log(subject);
    let className = 'conversation-list-item' + status===0?'':' active';
    console.log(status, className);
    return (
      <div className={status===0?'conversation-list-item':'conversation-list-item active'}>
        <h2 className="conversation-photo" >{subject}</h2>
        <div className="conversation-info">
          <h1 className="conversation-title">{ time }</h1>
          <div>
          <span className="conversation-snippet">{ text }</span>
          <img className="clip-image1"  alt="clip im" src={clip2}></img>
          </div>

        </div>
      </div>
    );
  }
}