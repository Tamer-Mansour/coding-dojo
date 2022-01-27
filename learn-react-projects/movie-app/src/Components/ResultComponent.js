import React, { Component } from 'react';

class ResultComponent extends Component {

  render() {
    var {result} = this.props;
    return (
      <div className="result">
        <h2>{result}</h2>
      </div>
    )
    ;
  }
}

export default ResultComponent;