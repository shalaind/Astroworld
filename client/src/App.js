import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Homepage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
