import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    loggedIn: this.props.loggedIn
  };

  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn) {
      this.setState({ loggedIn: this.props.loggedIn });
    }
  }

  render() {
    return (
      <nav className="nav-style">
        {this.state.loggedIn ? (
          <ul>
            <li>Welcome {this.state.loggedIn.username} !</li>
            <li>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                Projects
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign up
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Navbar;
