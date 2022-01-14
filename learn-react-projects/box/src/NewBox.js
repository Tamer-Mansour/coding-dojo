import React, { Component } from 'react';
class NewBoxForm extends Component {

  constructor(props) {
    super(props);
    this.state = { color: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state }
    this.props.createBox(newBox);
    this.setState({ color: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" onChange={this.handleChange} value={this.state.color} />
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewBoxForm;