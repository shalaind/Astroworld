import React, { Component } from "react";
import { Link } from 'react-router-dom'; 


class HpSection2 extends Component {
  render() {
    return (
      <div className="outerCon">
        <div className="hpCol1">
          <h1 className="hpSectionText"> LISTENING </h1>
          <h1 className="hpSectionText"> PARTY</h1>
          <h2> Show some love for your fav Astroworld songs </h2>
          <Link to= '/listening-party' class="button is-warning"> Click Here </Link>
        </div>
        <div className="hpCol2">
          <img src="https://i.imgur.com/3hrdK1Z.jpg" alt="astroworld concert" />
        </div>
      </div>
    );
  }
}

export default HpSection2;