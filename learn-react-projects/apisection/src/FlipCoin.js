import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component {
  static defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://st2.depositphotos.com/1035449/9342/v/950/depositphotos_93428712-stock-illustration-obverse-israeli-silver-money-one.jpg",
      },
      {
        side: "tail",
        imgSrc:
          "https://st.depositphotos.com/1035449/4830/v/950/depositphotos_48305279-stock-illustration-vector-israeli-silver-money-one.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      currFace: null,
      totalFlips: 0,
      heads: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  randomArrayFlipper(arrayFlipper) {
    const randomIdx = Math.floor(Math.random() * arrayFlipper.length);
    return arrayFlipper[randomIdx];
  }

  flipTheCoin() {
    const newFace = this.randomArrayFlipper(this.props.coins);
    this.setState((curState) => {
      const heads = curState.heads + (newFace.side === "head" ? true : false);
      return {
        currFace: newFace,
        totalFlips: curState.totalFlips + 1,
        heads: heads,
      };
    });
  }


  handleClick() {
    this.flipTheCoin();
  }
  render() {
    const { currFace, totalFlips, heads } = this.state;
    return (
      <div>
        <h2>Let's flip a coin</h2>

        {currFace && <Coin info={currFace} />}
        <button onClick={this.handleClick}>Flip Me!</button>

        <p>
          Out of {totalFlips} flips, there have been {heads} كتابة and{" "}
          {totalFlips - heads} صورة
        </p>
      </div>
    );
  }
}

export default FlipCoin;
