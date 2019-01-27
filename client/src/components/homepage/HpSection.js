import React, { Component } from 'react';
import styled from 'styled-components'; 

const HpSectionDiv = styled.div`
background-color: darkgray; 
width: 100vw; 
height: 60vh;
color: white; 
padding: 0px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center; 

h1{
    margin: 0; 
}

`

class HpSection extends Component {
    render() {
        return (
            <HpSectionDiv>
                <h1> this is a section </h1>
                <button>Click Here </button>
            </HpSectionDiv>
        );
    }
}

export default HpSection;