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
                <h1>Logo</h1>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/merch'><li>Merch</li></Link>
                    <Link to='/gallery'><li>Gallery</li></Link>
                    <Link to='/listening-party'><li>Listening Party</li></Link>

                </ul>
            </NavbarDiv>
        );
    }
}

export default Navbar;


