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
      <div style={{ margin: "30px" }}>
        <div style={{ width: "70vw"}} class="container">
          <article class="media">
           

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
