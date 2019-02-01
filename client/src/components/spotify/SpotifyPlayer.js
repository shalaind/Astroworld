import React, { Component } from 'react';
import VoteCounter from './VoteCounter';
import 'bulma/css/bulma.css'



class SpotifyPlayer extends Component {
    render() {
        return (
            <div className= "card">
           
            <iframe title="star gazing" src={this.props.spotifyLink} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <VoteCounter/>

         
            </div>
        );
    }
}

export default SpotifyPlayer;

