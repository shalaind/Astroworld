import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 
import AddReviewForm from './AddReviewForm';
import EditReview from './EditReview'; 
import Rating from 'react-rating' ;



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
        editReviewFormVisible: false,


    }

    toggleAddReviewForm = () => {
        this.setState({ reviewFormVisible: !this.state.reviewFormVisible })
    }

    toggleEditAddReviewForm = (indx) => {
        let currentItems  = this.state.review;
        currentItems[indx].isVisible = !currentItems[indx].isVisible;
        this.setState({ review: currentItems })
    }

    componentDidMount() {
        this.getAllReviews()
    }
    
    getAllReviews = () => {
        axios.get(`/api/review`)
        .then((res) => {
            let reviews = res.data.map((eachReview) => {
                eachReview.isVisible = false; 
                return eachReview;
            })
            this.setState({ review: reviews });
        })
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
                        <Rating 
                        initialRating = {allReviews.rating}
                        readonly
                        />
                        <img src={allReviews.userImage} alt="concert" />
                        <h3>{allReviews.name}</h3>
                        <div>
                            {
                                allReviews.isVisible 
                                ? <EditReview 
                                    review = {allReviews}
                                    getAllReviews={this.getAllReviews}
                                />
                                :   <p onClick={ ()=> (this.toggleEditAddReviewForm(i))}>{allReviews.comment}</p>                       
                            }
                        </div>
                      
                        <button onClick={()=>(this.deleteReview(allReviews._id))}>delete</button>


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