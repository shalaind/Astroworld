import React, { Component } from "react";


class HpSection extends Component {
  render() {
    return (
      <div className="outerCon">
        <div className="hpCol1">
          <h1 className="hpSectionText"> DID YOU </h1>
          <h1 className="hpSectionText"> ENJOY </h1>
          <h1 className="hpSectionText"> THE RIDE? </h1>
          <h2> Share your Astroworld Experience </h2>
          <a href= "/gallery"> <button class="button is-white"> Click Here </button> </a>
        </div>
        <div className="hpCol2">
          <img src="https://i.imgur.com/w82YwJx.jpg?1" alt="astroworld concert" />
        </div>
      </div>
    );
  }
}

export default HpSection;
