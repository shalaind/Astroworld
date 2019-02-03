import React, { Component } from "react";
import axios from "axios";

class AddImageForm extends Component {
  state = {
    image: {
      name: "",
      location: "",
      imageUrl: ""
    }
  };

  imageName = () => {
    var file = document.getElementById("file");
    file.onchange = function() {
      if (file.files.length > 0) {
        document.getElementById("filename").innerHTML = file.files[0].name;
      }
    };
  };

  imageSave = event => {
    const newState = { ...this.state.image };
    newState[event.target.name] = event.target.value;
    this.setState({ image: newState });
  };

  handleChange = event => {
    const newState = { ...this.state.image };
    newState[event.target.name] = event.target.value;
    this.setState({ image: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const imageUpload = this.state.image;
    console.log(imageUpload);

    axios.post("/api/image", imageUpload).then(res => {
      this.props.getAllImages();
      this.props.toggleAddImageForm();
    });
  };

  render() {
    return (
      <div className="container" style={{ width: "200px" }}>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input
            class="input"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.image.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            class="input"
            type="text"
            placeholder="Location"
            name="location"
            value={this.state.image.location}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            class="input"
            type="text"
            placeholder="Concert Image"
            name="imageUrl"
            value={this.state.image.imageUrl}
            onChange={this.handleChange}
          /> <br /> <br />

          <div class="file has-name is-boxed is-danger">
            <label class="file-label">
              <input
                onClick={this.imageName}
                class="file-input"
                id="file"
                type="file"
                name="imageUrl"
                onChange={this.handleChange}
                value={this.state.image.imageUrl}
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload" />
                </span>
                <span class="file-label">Choose a file…</span>
              </span>
              <span class="file-name" id="filename">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>

          <br />
          <br />
          <button class="button is-danger">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddImageForm;
