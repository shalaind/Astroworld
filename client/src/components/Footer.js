import React, { Component } from 'react';
import styled from 'styled-components';
import FooterBottom from './FooterBottom';
import FooterS1 from './FooterS1';
import FooterS2 from './FooterS2';
import FooterS3 from './FooterS3';

const FooterDiv = styled.div`
background-color: black; 
width: 100vw; 
height: 300px;
color: white; 
padding: 0px;
position:absolute;
bottom:0;
display:flex;
justify-content: space-around; 


h1{
    margin: 0; 
}

`
class Footer extends Component {
    render() {
        return (
            <div>
            <FooterDiv>
                <FooterS1/>
                <FooterS2/>
                <FooterS3/>
            </FooterDiv>
            <FooterBottom/>
            </div>
        );
    }
}

export default Footer;