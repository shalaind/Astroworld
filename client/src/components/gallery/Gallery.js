import React, { Component } from 'react';
import Images from './Images';
import Reviews from './Reviews';
import AddImageForm from './AddImageForm';
import AddReviewForm from './AddReviewForm';

class Gallery extends Component {
    render() {
        return (
            <div>
                <h1>Gallery Page</h1>
                <Images/>
                <h1>Show some love</h1>
                {/* add toggle here */}
                <button>Click here</button>

                <AddImageForm/>

                <Reviews/>
                <h1>Show some love</h1>
                {/* add toggle here */}

                <button>Click here</button>
                <AddReviewForm/>

            </div>
        );
    }
}

export default Gallery;