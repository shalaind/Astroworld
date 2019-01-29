import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline2';
import axios from 'axios'; 

class Inlinedemo extends Component {

    state = {
        message: 'ReactInline demo',
        review: []
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

    // dataChanged(data) {
    //     data = { description: "New validated text comes here" }
    //     // Update your model from here
    //     console.log(data)
    //     this.setState({...data})
    // }

    render() {
        return (
            <div>
            <h2>{this.state.review}</h2>
            <InlineEdit
              activeClassName="editing"
              text={this.state.review}
              name="comment"
              value={this.state.review.comment}
              change={this.handleChange}
              style={{
                minWidth: 300,
                height: 50,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 'solid grey 1px'
              }}
            />
            <button onClick={()=>(this.handleSubmit(this.props.reviewId))}>Save</button>
            </div>
        );
    }
}

export default Inlinedemo;