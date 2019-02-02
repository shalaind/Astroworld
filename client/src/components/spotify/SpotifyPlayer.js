import React, { Component } from "react";
import VoteCounter from "./VoteCounter";
import AudioPlayer from "react-h5-audio-player";

class SpotifyPlayer extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "500px", zIndex: "-6"}}>
          <AudioPlayer
            src="https://open.spotify.com/track/7wBJfHzpfI3032CSD7CE2m?si=kGBJCUntRMO0BFxUBq7uAQ"
            onPlay={e => console.log("onPlay")}
          />
          <iframe
            title="star gazing"
            src={this.props.spotifyLink}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <VoteCounter />
        </div>
      </div>
    );
  }
}

export default SpotifyPlayer;
