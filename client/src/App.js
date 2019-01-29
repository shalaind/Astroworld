import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import ShopList from './components/merch/ShopList';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ListeningParty from './components/spotify/ListeningParty';
import AstroHoodie from './components/merch/shopItemPages/AstroHoodie'; 
import AstroBeanie from './components/merch/shopItemPages/AstroBeanie'; 
import AstroDenimJacket from './components/merch/shopItemPages/AstroDenimJacket'; 
import AstroTieDye from './components/merch/shopItemPages/AstroTieDye'; 
import ThrillsAndChillsHoodie from './components/merch/shopItemPages/ThrillsAndChillsHoodie'; 
import ThrillsAndChillsPants from './components/merch/shopItemPages/ThrillsAndChillsPants'; 


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/merch" component={ShopList} />
            <Route exact path="/gallery" component={Gallery} />

            <Route exact path="/merch/astro-hoodie" component={AstroHoodie} />
            <Route exact path="/merch/astro-beanie" component={AstroBeanie} />
            <Route exact path="/merch/astro-denim-jacket" component={AstroDenimJacket} />
            <Route exact path="/merch/astro-tie-dye-tshirt" component={AstroTieDye} />
            <Route exact path="/merch/thrills-and-chills-hoodie" component={ThrillsAndChillsHoodie} />
            <Route exact path="/merch/thrills-and-chills-pants" component={ThrillsAndChillsPants} />

            <Route exact path="/listening-party" component={ListeningParty} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;