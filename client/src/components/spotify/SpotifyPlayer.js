import React, { Component } from 'react';
import VoteCounter from './VoteCounter';

class SpotifyPlayer extends Component {
    render() {
        return (
            <div>
            <iframe title="star gazing" src={this.props.spotifyLink} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <VoteCounter/>
            </div>
        );
    }
}

export default SpotifyPlayer;

