import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 
import AddReviewForm from './AddReviewForm';
import EditReview from './EditReview'; 

const ReviewDiv = styled.div`
img {
    width: 50px; 
    border-radius: 20px; 
}

`

class Reviews extends Component {
    state = {
        review: [{}],
        reviewFormVisible: false,
        editReviewFormVisible: false

    }

    toggleAddReviewForm = () => {
        this.setState({ reviewFormVisible: !this.state.reviewFormVisible })
    }

    toggleEditAddReviewForm = () => {
        this.setState({ editReviewFormVisible: !this.state.editReviewFormVisible })
    }

    componentDidMount() {
        this.getAllReviews()
    }
    
    getAllReviews = () => {
        axios.get(`/api/review`)
        .then((res) => this.setState({ review: res.data }))
    }

    deleteReview = (reviewId) => {
        axios.delete(`/api/review/${reviewId}`).then(()=> {
            this.setState({
                review: this.state.review.filter(item => item._id !== reviewId)
            })
        })
    }

    editReview = (reviewId) => {
        axios.patch(`/api/review/${reviewId}`).then(()=>
            console.log('review')
        )
    }

    render() {
        return (
            <div>
                <ReviewDiv>

                    {this.state.review.map((allReviews, i) => (
                    <div key={i}>
                        <img src={allReviews.userImage} alt="concert" />
                        <h3>{allReviews.name}</h3>
                        <p>{allReviews.comment}</p>
                        <button onClick={()=>(this.deleteReview(allReviews._id))}>delete</button>

                        <button onClick={ () => (this.toggleEditAddReviewForm(allReviews._id)) }>edit</button>
                            {
                                this.state.editReviewFormVisible 
                                ? <EditReview reviewId = {allReviews._id} getAllReviews={this.getAllReviews}
                    toggleEditAddReviewForm={this.toggleEditAddReviewForm} />
                                : null                        
                            }

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