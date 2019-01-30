import React, { Component } from 'react';
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 


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
                <img src="https://i.imgur.com/rtTtV8k.png" alt="astroworld logo" style={{
                    height: "60%"
                }} />
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/merch'>Merch</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/listening-party'>Listening Party</Link>

                </ul>
            </NavbarDiv>
        );
    }
}

export default Navbar;


