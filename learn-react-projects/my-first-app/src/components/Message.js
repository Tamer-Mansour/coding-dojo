import { Component } from "react/cjs/react.production.min";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "welcome to the site"
        }
    }
    logout = (e)=>{
        this.setState({message:"Goodbye Frind"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.logout} >Leave</button>
            </div>
        );
    }
}
export default Message;