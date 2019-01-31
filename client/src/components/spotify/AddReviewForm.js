import React, { Component } from "react";
import axios from "axios";
import Rating from "react-rating";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar )






class AddReviewForm extends Component {
  state = {
    review: {
      userImage: "",
      name: "",
      location: "",
      comment: "",
    }
  };

  handleChange = event => {
    const newState = { ...this.state.review };
    newState[event.target.name] = event.target.value;
    this.setState({ review: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const reviewUpload = this.state.review;
    axios.post("/api/review", reviewUpload).then(res => {
      console.log("it worked");
      this.props.getAllReviews();
      this.props.toggleAddReviewForm();
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* // <Ratings */}
          {/* //         rating={this.state.review.rating}
            //         widgetRatedColors="yellow"
            //         changeRating={this.changeRating}

            //         >
            //         <Ratings.Widget widgetHoverColor="purple"/>
            //         <Ratings.Widget widgetHoverColor="purple"/>
            //         <Ratings.Widget widgetHoverColor="purple"/>
            //         <Ratings.Widget widgetHoverColor="purple" />
            //         <Ratings.Widget widgetHoverColor="purple" />
            // </Ratings> */}

          <Rating
              emptySymbol={<img src="https://i.imgur.com/8pYLYaH.png" style= {{width: "25px" }} alt= "star icon" className="icon" />}
              fullSymbol={<img src="https://i.imgur.com/42SoNeS.png" style= {{width: "25px" }} alt = "star icon" className="icon" />} 
            onChange={(rate) => {
              let review = {...this.state.review};
              review.rating = rate;
              this.setState({ review }) 
            }}

            rate={this.state.review.rating}
          />

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.review.title}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="User Image"
            name="userImage"
            value={this.state.review.userImage}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.review.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Comment"
            name="comment"
            onChange={this.handleChange}
            value={this.state.review.comment}
            
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;
