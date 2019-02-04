import React, { Component } from "react";

class SpotifyPlayer extends Component {
  render() {
    return (
      <div class="container">
        <iframe
          title="Astroworld Album"
          src="https://open.spotify.com/embed/album/41GuZcammIkupMPKH2OJ6I"
          width="800"
          height="450"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}

export default SpotifyPlayer;
