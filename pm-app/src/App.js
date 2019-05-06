import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/Projects/Details";
import ProjectsList from "./components/Projects/List";
import TaskDetails from "./components/Tasks/Details";
import Signup from "./components/Auth/Signup";
import { loggedin } from "./services/auth";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    loggedIn: null
  };

  setUser = user => {
    this.setState({
      loggedIn: user
    });
  };

  getUser = () => {
    loggedin().then(user => {
      this.setState({
        loggedIn: user
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar loggedIn={this.state.loggedIn} />

        <Switch>
          <Route
            exact
            path="/signup"
            //  component={Signup}
            //  render allows us to pass props to our component inside Routes
            render={() => <Signup setUser={this.setUser} />}
          />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects" component={ProjectsList} />
          <Route path="/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
