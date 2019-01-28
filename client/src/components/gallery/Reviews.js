import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 
import AddReviewForm from './AddReviewForm';

const ReviewDiv = styled.div`
img {
    width: 50px; 
    border-radius: 20px; 
}

`

class Reviews extends Component {
    state = {
        review: [{}],
        reviewFormVisible: false
    }

    toggleAddReviewForm = () => {
        this.setState({ reviewFormVisible: !this.state.reviewFormVisible })
    }

    componentDidMount() {
        this.getAllReviews()
    }
    
    getAllReviews = () => {
        axios.get(`/api/review`)
        .then((res) => this.setState({ review: res.data }))
    }

    render() {
        return (
            <div>
                <ReviewDiv>

                    {this.state.review.map((allReviews, i) => (
                    <div key={i}>
                        <img src={allReviews.userImage} alt="concert" />
                        <h3>{allReviews.location}</h3>
                        <h3>{allReviews.name}</h3>
                        <p>{allReviews.comment}</p>

                    </div>
                    ))}


                </ReviewDiv>
                    <p className="pointer" onClick= {this.toggleAddReviewForm}>Leave a Comment</p>

                        {this.state.reviewFormVisible ? <AddReviewForm getAllReviews={this.getAllReviews}
                    toggleAddReviewForm={this.toggleAddReviewForm}/>
                        : null}
            </div>
        );
    }
}

export default Reviews;