import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <div style={{width: "100px",height: "100px",backgroundColor: `${this.props.color}`}}/>
      </div>
    );
  }
}

export default Box;