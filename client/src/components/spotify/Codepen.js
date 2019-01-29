import React, { Component } from 'react';
import axios from 'axios'; 

class Codepen extends Component {
    state = {
        review: [{}],
        button: "Edit",
        show: "ready"
    };

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

    // change = (event) => {
    //     this.setState({ text: event.target.value })
    // }

    button = () => {
        if (this.state.button === "Edit") {
            this.setState({ button: "Save", show: "editing" })
        } else {
            this.setState({ button: "Edit", show: "ready" })
        }
    }

    render() {
        var disR = "";
        var disE = "";
        if (this.state.show === "ready") {
          disE = "none";
        } else {
          disR = "none";
        }

        return (
            <div>

 <form onSubmit= {this.handleSubmit}>
                    <input style={{ display: disE }} type="text" name="comment" value={this.state.review.comment} onChange={this.handleChange}/><br/>
                    <button>Submit</button>
                </form>


                <button onClick={this.button.bind(this)}>{this.state.button}</button>
            </div>
        );
    }
}

export default Codepen;