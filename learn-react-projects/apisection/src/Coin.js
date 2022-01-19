import React, { Component } from "react";
import "./coin.css";
class Coin extends Component {
  render() {
    return (
      <div class="Coin">
        <img src={this.props.info.imgSrc} />
      </div>
    );
  }
}

export default Coin;
