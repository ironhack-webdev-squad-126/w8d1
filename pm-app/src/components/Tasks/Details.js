import React from "react";
import axios from "axios";

class TaskDetails extends React.Component {
  state = {};

  componentDidMount() {
    const taskId = this.props.match.params.taskId;

    axios.get(`http://localhost:5000/api/tasks/${taskId}`).then(response => {
      //   this.setState(response.data);

      this.setState({
        title: response.data.title,
        description: response.data.description
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default TaskDetails;
