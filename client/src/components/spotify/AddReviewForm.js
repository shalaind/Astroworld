import React, { Component } from 'react';
import axios from 'axios'; 
import Rating from 'react-rating' ;




class AddReviewForm extends Component {
    state = {
        review: {
            userImage:'',
            name: '',
            location: '',
            comment: ''
        }
    }

 
    handleChange = (event) => {
        const newState = { ...this.state.review }
        newState[event.target.name] = event.target.value
        this.setState({ review: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const reviewUpload = this.state.review
        axios.post('/api/review', reviewUpload)
        .then((res) => {
            console.log('it worked')
            this.props.getAllReviews()
            this.props.toggleAddReviewForm()
        })
    }

    render() {
        return (
            <div>
            <form onSubmit= {this.handleSubmit}>
            <Rating
            />

                <input type="text" placeholder="User Image" name="userImage" value={this.state.review.userImage} onChange={this.handleChange}/><br/>
                <input type="text" placeholder="Name" name="name" value={this.state.review.name} onChange={this.handleChange}/><br/>
                <input type="text" placeholder="Comment" name="comment" value={this.state.review.comment} onChange={this.handleChange}/><br/>
                <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default AddReviewForm;