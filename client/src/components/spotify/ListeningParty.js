import React, { Component } from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import Reviews from './Reviews';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';

class ListeningParty extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
            <Navbar />
            <PageHeader />
             <h1>Listening Party</h1>
             <h2>Preview the tracks below and vote on the ones you like</h2>
            <SpotifyPlayer 
                spotifyLink = "https://open.spotify.com/embed/track/7wBJfHzpfI3032CSD7CE2m"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/7KZ5MMVgBVox9ycroB2UrI"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/2xLMifQCjDGFmkHkpNLD9h"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/4SZepBIPDRwPaHIjAKwRDb"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/1xYpVRspgaLxdJLOTQkTjg"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/6OaVWaGfhXn70ZJfdVcabn"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/6NMtzpDQBTOfJwMzgMX0zl"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/20MuVazoNMv6xjKPnRFOxG" 
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/11kDth1aKUEUMq9r1pqyds"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/6BJbOXDlgVAXSaq6wYFYT2"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/4MXhiYIRDMGAuvZc5IFTwC"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/7lAK3oHbfEnvUQWosrMMpR"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/27a1mYSG5tYg7dmEjWBcmL"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/4KYS9GK68yeuUJ8vJfPxrq"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/2cYqizR4lgvp4Qu6IQ3qGN"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/58TaFP5j5i9swOf584yon2"
            />
            <SpotifyPlayer
                spotifyLink = "https://open.spotify.com/embed/track/58TaFP5j5i9swOf584yon2"
            />


            <h2>Fan Reviews</h2>
            <Reviews/>

            <button> Listen on Spotify </button>
            <button> Listen on Itunes </button>
            <button> Listen on apple music </button>
            <button> Listen on google play </button>

            </div>
        );
    }
}

export default ListeningParty;