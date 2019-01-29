import React, { Component } from 'react';
import Images from './Images';

class Gallery extends Component {
  
    render() {
        return (
            <div>
                <h1>AstroLove</h1>
                <h2>Fan Images</h2>
                <Images />
            </div>
        );
    }
}

export default Gallery;