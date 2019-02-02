import React, { Component } from "react";
import axios from "axios";
import AddReviewForm from "./AddReviewForm";
import EditReview from "./EditReview";
// import Ratings from 'react-ratings-declarative';
import Rating from "react-rating";


class Reviews extends Component {
  state = {
    review: [{}],
    reviewFormVisible: false,
    editReviewFormVisible: false
  };

  toggleAddReviewForm = () => {
    this.setState({ reviewFormVisible: !this.state.reviewFormVisible });
  };

  toggleEditAddReviewForm = indx => {
    let currentItems = this.state.review;
    currentItems[indx].isVisible = !currentItems[indx].isVisible;
    this.setState({ review: currentItems });
  };

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews = () => {
    axios.get(`/api/review`).then(res => {
      let reviews = res.data.map(eachReview => {
        eachReview.isVisible = false;
        return eachReview;
      });
      this.setState({ review: reviews });
    });
  };

  deleteReview = reviewId => {
    axios.delete(`/api/review/${reviewId}`).then(() => {
      this.setState({
        review: this.state.review.filter(item => item._id !== reviewId)
      });
    });
  };

  editReview = reviewId => {
    axios.patch(`/api/review/${reviewId}`).then(() => console.log("review"));
  };

  render() {
    return (
      <div>
        {this.state.review.map((allReviews, i) => (
          <div style={{ width: "70vw" }} className="container" key={i}>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={allReviews.userImage} alt="profile" />
                </p>
              </figure>

              <div className="media-content">
                <div className="content">
                    <p><strong>{allReviews.title}</strong></p>

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
                      initialRating={allReviews.rating}
                      readonly
                    />

                    <br />
                    <p>by {allReviews.name} </p>

                    <div>
                      {allReviews.isVisible ? (
                        <EditReview
                          review={allReviews}
                          getAllReviews={this.getAllReviews}
                        />
                      ) : (
                        <p onClick={() => this.toggleEditAddReviewForm(i)}>
                          {allReviews.comment}
                        </p>
                      )}
                    </div>

                    <br />
                </div>
              </div>

              <div className="media-right">
                <button
                  onClick={() => this.deleteReview(allReviews._id)}
                  className="delete"
                />
              </div>
            </article>

      
          </div>
        ))}

        {/* end of map */}
     

        <p className="pointer" onClick={this.toggleAddReviewForm}>
          Leave a Comment
        </p>

        {this.state.reviewFormVisible ? (
          <AddReviewForm
            getAllReviews={this.getAllReviews}
            toggleAddReviewForm={this.toggleAddReviewForm}
          />
        ) : null}
      </div>

    );
  }
}

export default Reviews;
