import { Component } from "react";
import "./PersoneCard.css";

class PersoneCard extends Component {
    constructor(props){
        super(props);

        this.state ={
            age: this.props.age
        };
    }
    changeAge =() =>{
        this.setState({age:this.state.age +1});
    };

render(){
    return(
         <div class="countenar">
                <div class="thediv">
                   <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button class="button" onClick={this.changeAge}> Birthday Button For {this.props.firstName}, {this.props.lastName} </button>
                </div>
            </div>
        );

    }
}
export default PersoneCard;