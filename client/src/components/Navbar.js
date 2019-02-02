import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


class Navbar extends Component {
    render() {
        return (



<nav className="navbar is-black customNav" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="https://i.imgur.com/rtTtV8k.png" width="150"  alt="astro logo" />
    </a>

    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

     <Link to='/' className= "navbar-item navLinks" >Home</Link>
    <Link to='/merch' className= "navbar-item navLinks">Merch</Link>
    <Link to='/gallery' className= "navbar-item navLinks">Gallery</Link>
     <Link to='/listening-party' className= "navbar-item navLinks">Listening Party</Link>
    </div>

  </div>
</nav>
          
        );
    }
}

export default Navbar;


