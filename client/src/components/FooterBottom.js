import React, { Component } from 'react';
import styled from 'styled-components';

const FooterBottomDiv = styled.div`
background-color: grey; 
width: 100vw; 
height: 50px;
color: white; 
padding: 0px;
position:absolute;
bottom:0;
display: flex;


h1{
    margin: 0; 
}

h3{
    margin-left: 15px;
}

`

class FooterBottom extends Component {
    render() {
        return (
            <FooterBottomDiv>
             <h3>copy right info</h3>
             <h3>social media icon</h3>
             <h3>social media icon</h3>
             <h3>social media icon</h3>
            </FooterBottomDiv>
        );
    }
}

export default FooterBottom;