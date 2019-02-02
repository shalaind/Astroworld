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
            <PageHeader />
                <h1>AstroLove</h1>
                <h2>Fan Images</h2>
                <Images />
            </div>
        );
    }
}

export default Gallery;