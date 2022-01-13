import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import "./Main.css"


class Main extends Component {
    render(){
    return (
        <div className="main">
            <p>
                {this.props.SubContents}
            </p>
            {this.props.children}
            <p>
                {this.props.Advertisement}
            </p>
            {this.props.children}

        </div>
    );
}
}
export default Main;