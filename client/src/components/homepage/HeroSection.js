import React, { Component } from 'react';


class HeroSection extends Component {
    render() {
        return (
            <div className = "heroImage">
                <img className="cloudTransition" src="https://i.imgur.com/nCdwJjH.png" alt="cloud transition"/>
                <img className="cloudTransition2" src="https://i.imgur.com/vhpF5Ln.png" alt="cloud transition" />
                <img className="cloudTransition3" src="https://i.imgur.com/nCdwJjH.png" alt="cloud transition" />
            </div>
        );
    }
}

export default HeroSection;