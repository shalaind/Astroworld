import React, { Component } from 'react';
import axios from 'axios'; 


class editReview extends Component {
    state = {
        comment: this.props.review.comment
    }

    //comment = this.props.review.comment;

    toggleEditReviewForm = () => {
        this.setState({ editReviewFormVisible: !this.state.editReviewFormVisible })
    }

    handleChange = (event) => {
        // const newState = { ...this.state.review }
        // newState[event.target.name] = event.target.value
         this.setState({ comment: event.target.value })
        //this.props.review.comment = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let review = this.props.review
        review.comment = this.state.comment
        review.isVisible = false;
        axios.patch(`/api/review/${review._id}`, review)
        .then((res) => {
            console.log('it worked')
            this.props.getAllReviews()
        })
    }

    render() {
        return (
            <div>
        
                <form onSubmit= {this.handleSubmit}>
                    <textarea class="textarea" type="text" onChange= {this.handleChange} placeholder="Comment" name="comment" value={this.state.comment}/><br/>
                    <button class="button is-warning is-small" onClick={this.toggleEditAddReviewForm}>Submit</button>
                </form>
            </div>
        );
    }
}

export default editReview;