import React, { Component } from 'react';
import styled from 'styled-components';

const HeroDiv = styled.div`
background-color: grey; 
width: 100vw; 
height: 100vh;
color: white; 
text-align: center; 
h1{
    margin: 0; 
}
`

class HeroSection extends Component {
    render() {
        return (
            <HeroDiv>
                <h1>Full Screen Hero Image</h1>
            </HeroDiv>
        );
    }
}

export default HeroSection;