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

      <div class="container" >

       <h1 class="homepageMerch" style={{fontSize: "30pt", textAlign: "center"}}>
       <span style={{color: "gold"}}>R</span>
       <span style={{color: "red"}}>E</span>
       <span style={{color: "black"}}>V</span>
       <span style={{color: "blue"}}>I</span>
       <span style={{color: "magenta"}}>E</span>
       <span style={{color: "green"}}>W</span>
       <span style={{color: "orange"}}>S</span>
       
       </h1>

        {this.state.review.map((allReviews, i) => (
          <div style={{ width: "70vw" }} className="container" key={i}>
            <article className="media">
         

              <div className="media-content">
                <div className="content">
                  <p style = {{margin: "0"}}>
                    <strong>{allReviews.title}</strong>
                  

                  <Rating
                    emptySymbol={
                      <img
                        src="https://i.imgur.com/8pYLYaH.png"
                        style={{ width: "25px"}}
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
                  /> </p>
                  <p>by {allReviews.name} </p>

                  <div>
                    {allReviews.isVisible ? (
                      <EditReview
                        review={allReviews}
                        getAllReviews={this.getAllReviews}
                      />
                    ) : (
                      <p>
                        {allReviews.comment}

                        <p
                          class="pointer"
                          onClick={() => this.toggleEditAddReviewForm(i)}
                          style={{
                            fontSize: "15px",
                            marginTop: "10px",
                            color: "gray"
                          }}
                        >
                          edit
                        </p>
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

        <div style={{ width: "70vw", marginBottom: "20px" }} class="container">
          <p className="pointer" onClick={this.toggleAddReviewForm}>
            Leave a Comment
          </p>
        </div>

          {this.state.reviewFormVisible ? (
            <AddReviewForm
              getAllReviews={this.getAllReviews}
              toggleAddReviewForm={this.toggleAddReviewForm}
            />
          ) : null}
      </div>
      </div>

    );
  }
}

export default Reviews;
