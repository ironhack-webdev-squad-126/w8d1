import React from "react";
import { Link } from "react-router-dom";
import EditProject from "./Edit";
import AddTask from "../Tasks/Add";
import axios from "axios";

class ProjectDetails extends React.Component {
  state = {
    project: {}
  };

  getProject = () => {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/api/projects/${id}`).then(response => {
      this.setState({
        project: response.data
      });
    });
  };

  deleteProject = () => {
    const id = this.props.match.params.id;

    axios.delete(`http://localhost:5000/api/projects/${id}`).then(response => {
      // redirects to /projects
      this.props.history.push("/projects");
    });
  };

  componentDidMount() {
    this.getProject();
  }

  render() {
    const { project } = this.state;
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        {project.tasks && project.tasks.length > 0 && <h3>Tasks</h3>}
        {project.tasks &&
          project.tasks.map(task => {
            return (
              <div key={task._id}>
                <Link to={`/tasks/${task._id}`}>{task.title}</Link>
              </div>
            );
          })}

        <EditProject project={project} getDetails={this.getProject} />
        <button
          style={{ marginTop: "10px" }}
          className="btn btn-danger"
          onClick={this.deleteProject}
        >
          Delete project
        </button>
        <br />

        <AddTask project={project} getProject={this.getProject} />
        <br />

        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default ProjectDetails;
