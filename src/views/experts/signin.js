import React from "react";

class SigninComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Richardo Kusuma"
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input type="text" onChange={this.handleUsernameChange} />
        <button onClick={this.handleSubmit}>Show</button>
      </div>
    );
  }
}

export default SigninComponent;
