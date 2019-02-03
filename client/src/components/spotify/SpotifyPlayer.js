import React, { Component } from "react";
import VoteCounter from "./VoteCounter";

class SpotifyPlayer extends Component {
  render() {
    return (
      <div style={{width: "500px"}}>
          <div class="card">
  <div class="card-content">
    <iframe
            title="star gazing"
            src={this.props.spotifyLink}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />  
   
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
      <VoteCounter />
      </span>
    </p>
  </footer>
</div>
      </div>
    );
  }
}

export default SpotifyPlayer;
