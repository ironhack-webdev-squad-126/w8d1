import React from "react";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api"
});

class AddPoster extends React.Component {
  state = {
    name: "",
    description: "",
    imageUrl: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleUpload = event => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("imageUrl", file);

    service.post("/upload", data).then(response => {
      this.setState({ imageUrl: response.data.secure_url });
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, description, imageUrl } = this.state;
    service
      .post("/posters/create", { name, description, imageUrl })
      .then(() => {
        console.log("success! check the database to see if all went well");
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>name: </label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>description: </label>
        <input
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <input type="file" onChange={this.handleUpload} />

        <input type="submit" value="create a poster" />
      </form>
    );
  }
}

export default AddPoster;
