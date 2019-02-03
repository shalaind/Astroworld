import React, { Component } from "react";
import axios from "axios";
import Rating from "react-rating";

class AddReviewForm extends Component {
  state = {
    review: {
      userImage: "",
      name: "",
      location: "",
      comment: ""
    },
    selectedFile: null
  };

  handleChange = event => {
    const newState = { ...this.state.review };
    newState[event.target.name] = event.target.value;
    this.setState({ review: newState });
  };

  // uploadImage = event => {
  //   const newState = { ...this.state.review };
  //   newState[event.target.name] = event.target.value;
  //   this.setState({ review: newState });

  //   this.setState({selectedFile: event.target.files[0]})

  //   let image = event.target.value;
  //   let files = event.target.files;

  //   console.log("here's your pic", image , files)
  // }

  handleSubmit = event => {
    event.preventDefault();
    const reviewUpload = this.state.review;
    axios.post("/api/review", reviewUpload).then(res => {
      console.log("it worked");
      this.props.getAllReviews();
      this.props.toggleAddReviewForm();
    });
  };

  imageUpload = () => {
    let file = document.getElementById("file");
    file.onchange = function() {
      if (file.files.length > 0) {
        document.getElementById("filename").innerHTML = file.files[0].name;
      }
    };
  };

  render() {
    return (
      <div>
        <div style={{ width: "70vw" }} class="container">
          <article class="media">
            <figure class="media-left">
              <div class="field">
                <div style={{ width: "10vw" }} class="file is-small has-name is-boxed is-warning">
                  <label class="file-label">
                    <input
                      onClick={this.imageUpload}
                      class="file-input"
                      type="file"
                      name="userImage"
                      id="file"

                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload" />
                      </span>
                      <span class="file-label">User Image…</span>
                    </span>
                    <span class="file-name" id="filename">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>
            </figure>

            <div class="media-content">
              <input
                style={{ width: "300px" }}
                class="input"
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.review.title}
                onChange={this.handleChange}
              />{" "}
              <Rating
                emptySymbol={
                  <img
                    src="https://i.imgur.com/8pYLYaH.png"
                    style={{ width: "25px" }}
                    alt="star icon"
                    className="icon"
                  />
                }
                fullSymbol={
                  <img
                    src="https://i.imgur.com/42SoNeS.png"
                    style={{ width: "25px" }}
                    alt="star icon"
                    className="icon"
                  />
                }
                onChange={rate => {
                  let review = { ...this.state.review };
                  review.rating = rate;
                  this.setState({ review });
                }}
                rate={this.state.review.rating}
              />
              <br />
              <input
                style={{ width: "300px", marginTop: "10px" }}
                class="input"
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.review.name}
                onChange={this.handleChange}
              />
              <form onSubmit={this.handleSubmit}>
                <div class="field">
                  <p class="control">
                    <textarea
                      style={{ marginTop: "10px" }}
                      class="textarea"
                      placeholder="What ya think?..."
                      name="comment"
                      onChange={this.handleChange}
                      value={this.state.review.comment}
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-warning">Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </article>
        </div>  
      </div>
    );
  }
}

export default AddReviewForm;
