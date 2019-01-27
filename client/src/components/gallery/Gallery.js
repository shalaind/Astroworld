import React, { Component } from 'react';
import Images from './Images';
import Reviews from './Reviews';
import AddImageForm from './AddImageForm';
import AddReviewForm from './AddReviewForm';



class Gallery extends Component {
    state = {
        imageFormVisible: false,
        reviewFormVisible: false
}
  

    toggleImageForm = () => {
        this.setState({ imageFormVisible: !this.state.imageFormVisible })
    }

    toggleReviewForm = () => {
        this.setState({ reviewFormVisible: !this.state.reviewFormVisible })
    }

    render() {
        return (
            <div>
                <h1>AstroLove</h1>

                <h2>Fan Images</h2>

                <Images />

                <p class= "pointer" onClick= {this.toggleImageForm}>Add a pic</p>
                {this.state.imageFormVisible ? <AddImageForm/>
                  : null}

                <h2>Fan Reviews</h2>


                <Reviews/>
                <p class="pointer" onClick= {this.toggleReviewForm}>Leave a Comment</p>

                 {this.state.reviewFormVisible ? <AddReviewForm/>
                  : null}

            </div>
        );
    }
}

export default Gallery;