import React, { Component } from 'react';
import Images from './Images';
import Navbar from '../Navbar';


class Gallery extends Component {
  
    render() {
        return (
            <div>
            <Navbar />
                <h1>AstroLove</h1>
                <h2>Fan Images</h2>
                <Images />
            </div>
        );
    }
}

export default Gallery;