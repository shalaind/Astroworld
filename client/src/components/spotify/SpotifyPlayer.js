import React, { Component } from 'react';
import VoteCounter from './VoteCounter';

class SpotifyPlayer extends Component {
    render() {
        return (
            <div>
            <iframe title="star gazing" src="https://open.spotify.com/embed/track/7wBJfHzpfI3032CSD7CE2m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <VoteCounter/>
            </div>
        );
    }
}

export default SpotifyPlayer;