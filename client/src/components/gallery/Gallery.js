import React, { Component } from 'react';
import Images from './Images';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';


class Gallery extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
  
    render() {
        return (
            <div>
            <Navbar />
            <PageHeader pageTitle = "Astro Love" />
                <Images />
            </div>
        );
    }
}

export default Gallery;