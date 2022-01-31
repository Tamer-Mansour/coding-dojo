import { Component } from "react/cjs/react.production.min";

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    flipSwitch = () => {
        if (this.state.position === "On") {
            this.setState({ position: "off" });
        } else {
            this.setState({ position: "on" });
        }
    }

    render() {
        return (
            <fieldset>
                <p>The Light Switch {this.state.position}</p>
                <button onClick={this.flipSwitch}>Flip Switch</button>
            </fieldset>
        );
    }
}
export default LightSwitch;