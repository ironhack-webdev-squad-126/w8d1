import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/Projects/Details";
import ProjectsList from "./components/Projects/List";
import TaskDetails from "./components/Tasks/Details";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { loggedin } from "./services/auth";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />

        <Switch>
          <Route
            exact
            path="/signup"
            //  component={Signup}
            //  render allows us to pass props to our component inside Routes
            render={() => <Signup setUser={this.setUser} />}
          />

          <Route
            exact
            path="/login"
            render={() => <Login setUser={this.setUser} />}
          />

          <Route
            exact
            path="/projects/:id"
            render={props => (
              <ProjectDetails {...props} user={this.state.loggedIn} />
            )}
          />

          <ProtectedRoute
            user={this.state.loggedIn}
            component={ProjectsList}
            exact={true}
            path="/projects"
          />

          <Route path="/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
