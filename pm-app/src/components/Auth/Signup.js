import React from "react";
import { signup } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    signup(username, password).then(user => {
      this.setState({
        username: "",
        password: ""
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username: </label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>password: </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </div>
          <input type="submit" value="signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
