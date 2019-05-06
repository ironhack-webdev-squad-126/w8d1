import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/Projects/Details";
import ProjectsList from "./components/Projects/List";
import TaskDetails from "./components/Tasks/Details";
import Layout from "./components/Layout";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/projects" component={ProjectsList} />
        <Layout>
          <Route path="/tasks/:taskId" component={TaskDetails} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
