import React, { Component } from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import Reviews from './Reviews';

class ListeningParty extends Component {
    render() {
        return (
            <div>
             <h1>Listening Party</h1>
             <h2>Preview the tracks below and vote on the ones you like</h2>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>
            <SpotifyPlayer/>

            <h2>Fan Reviews</h2>
            <Reviews/>

            <button> Listen on Spotify </button>
            <button> Listen on Itunes </button>
            <button>Listen on apple music </button>
            <button> Listen on google play </button>




            </div>
        );
    }
}

export default ListeningParty;