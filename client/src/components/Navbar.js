import React, { Component } from 'react';
import styled from 'styled-components'; 

const NavbarDiv = styled.div`
background-color: black; 
width: 100vw; 
height: 60px;
color: white; 
padding: 0px;
top: 0px;

h1{
    margin: 0; 
}

`

class Navbar extends Component {
    render() {
        return (
            <NavbarDiv>
                <h1>this will be a navbar</h1>
                {/* add links in here to merch, astrolove, home */}
            </NavbarDiv>
        );
    }
}

export default Navbar;