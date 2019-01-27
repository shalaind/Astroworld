import React, { Component } from 'react';
import HeroSection from './HeroSection';
import HpSection from './HpSection';
import HpMerchSection from './HpMerchSection';


class Homepage extends Component {
    render() {
        return (
            <div>
                <HeroSection/>
                <HpSection/>
                <HpMerchSection/>
                <HpSection/>
           </div>

        );
    }
}

export default Homepage;