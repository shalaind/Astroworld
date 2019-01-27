import React, { Component } from 'react';
import Navbar from '../Navbar';
import HeroSection from './HeroSection';
import Footer from '../footer/Footer';
import HpSection from './HpSection';
import HpMerchSection from './HpMerchSection';


class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <HeroSection/>
                <HpSection/>
                <HpMerchSection/>
                <HpSection/>
                <Footer/>
           </div>

        );
    }
}

export default Homepage;