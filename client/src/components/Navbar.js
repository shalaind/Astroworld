import React, { Component } from 'react';
import styled from 'styled-components'; 

const NavbarDiv = styled.div`
background-color: black; 
width: 100vw; 
height: 60px;
color: white; 
padding: 0px;
top: 0px;
display: flex; 

h1{
    margin: 0; 
    margin-left: 20px; 
}

`

class Navbar extends Component {
    render() {
        return (
            <NavbarDiv>
                <h1>Logo</h1>
                <h1>Home</h1>
                <h1>Merch</h1>
                <h1>Astrolove</h1>

                {/* add links in here to merch, astrolove, home */}
            </NavbarDiv>
        );
    }
}

export default Navbar;