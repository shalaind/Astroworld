import React, { Component } from 'react';
import axios from 'axios'; 

class editReview extends Component {
    state = {
        review: [{}],
    }

    toggleEditReviewForm = () => {
        this.setState({ editReviewFormVisible: !this.state.editReviewFormVisible })
    }

    handleChange = (event) => {
        const newState = { ...this.state.review }
        newState[event.target.name] = event.target.value
        this.setState({ review: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const updateReview = this.state.review
        const reviewId = this.props.reviewId
        axios.patch(`/api/review/${reviewId}`, updateReview)
        .then((res) => {
            console.log('it worked')
            this.props.getAllReviews()
            this.props.toggleEditAddReviewForm()
        })
    }

    render() {
        return (
            <div>
            

                <form onSubmit= {this.handleSubmit}>
                    <input type="text" placeholder="Comment" name="comment" value={this.state.review.comment} onChange={this.handleChange}/><br/>
                    <button onClick={this.toggleEditAddReviewForm}>Submit</button>
                </form>
            </div>
        );
    }
}

export default editReview;