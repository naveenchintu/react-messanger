import React, { Component } from 'react';
import './Compose.css';
import clip1 from './clip1.png';

export default class Compose extends Component {

  render() {
    return (
      <div className="compose">
        <button 
        className="clip-button"><img onclick="javascript:alert(12)" className="clip-image" alt ="attachment" src={clip1}></img></button>
        <input
          type="text"
          className="compose-input"
          placeholder="Enter your text here..."
          // value={this.state.}
          
        />
        {
          this.props.rightItems
        }
      </div>
    );
  }
}