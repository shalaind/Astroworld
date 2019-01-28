import React, { Component } from 'react';
import Images from './Images';
import Reviews from './Reviews';

class Gallery extends Component {
  
    render() {
        return (
            <div>
                <h1>AstroLove</h1>
                <h2>Fan Images</h2>
                <Images />

                <h2>Fan Reviews</h2>
                <Reviews/>
            </div>
        );
    }
}

export default Gallery;