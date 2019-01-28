import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import ShopList from './components/merch/ShopList';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import ShopItemDesc from './components/merch/ShopItemDesc'; 
import ListeningParty from './components/spotify/ListeningParty';

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
            <Route exact path="/merch/itemdesc" component={ShopItemDesc} />
            <Route exact path="/listening-party" component={ListeningParty} />

          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;