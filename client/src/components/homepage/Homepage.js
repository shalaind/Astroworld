import React, { Component } from 'react';
import HeroSection from './HeroSection';
import HpSection from './HpSection';
import HpSection2 from './HpSection2';
import HpMerchSection from './HpMerchSection';


class Homepage extends Component {
    render() {
        return (
            <div>
                <HeroSection/>
                <HpSection/>
                <HpMerchSection/>
                <HpSection2/>
           </div>

        );
    }
}

export default Homepage;