import React, { Component } from "react";
import axios from "axios";
import AddImageForm from "./AddImageForm";

class Images extends Component {
  state = {
    image: [{}],
    imageFormVisible: false,
    hovered: false
  };

  componentDidMount() {
    this.getAllImages();
  }

  getAllImages = () => {
    axios.get(`/api/image`).then(res =>
      // console.log(res.data)

      this.setState({ image: res.data })
    );
  };

  deleteImage = imageId => {
    axios.delete(`/api/image/${imageId}`).then(() => {
      this.setState({
        image: this.state.image.filter(item => item._id !== imageId)
      });
    });
  };

  rollOverData = event => {
    console.log("you are hovering");
  };

  toggleAddImageForm = () => {
    this.setState({ imageFormVisible: !this.state.imageFormVisible });
  };

  render() {
    return (
      <div style={{ marginTop: "2em" }}>
        <div class="imagePostsOuter container">
          {this.state.image.map((concertPics, i) => (
            <div key={i}>
              <div class="imagePosts">
                <div>
                  <div class="imgCon">
                    <img
                      class="eachImg"
                      onClick={() => this.deleteImage(concertPics._id)}
                      src={concertPics.imageUrl}
                      alt="concert"
                    />

                    <span class="imgText">
                      <strong style={{ color: "white" }}>
                        {concertPics.location}
                      </strong>
                      <h3>By: {concertPics.name} </h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="container" style={{ marginTop: "30px", marginBottom: "30px", textAlign: "center"}}>
          <button class="button is-danger">View More</button> <br />
          <p className="pointer button is-text" onClick={this.toggleAddImageForm}>
            Add a Pic
          </p>
          {this.state.imageFormVisible ? (
            <AddImageForm
              getAllImages={this.getAllImages}
              toggleAddImageForm={this.toggleAddImageForm}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Images;
