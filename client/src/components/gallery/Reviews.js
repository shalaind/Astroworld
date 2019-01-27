import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 

const ReviewDiv = styled.div`
img {
    width: 50px; 
    border-radius: 20px; 
}

`

class Reviews extends Component {
    state = {
        review: [{}]
      
    }

    componentDidMount() {
        this.getAllImages()
    }
    
    getAllImages = () => {
        axios.get(`/api/review`)
        .then((res) => this.setState({ review: res.data }))
    }

    render() {
        return (
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
        );
    }
}

export default Reviews;