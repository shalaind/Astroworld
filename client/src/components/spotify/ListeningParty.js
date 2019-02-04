import React, { Component } from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import Reviews from './Reviews';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';
import 'bulma/css/bulma.css'


class ListeningParty extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
            <Navbar />
            <PageHeader pageTitle = "Listening Party" />
            <div class="container" style={{ width: "800px", marginTop: "2%" }} > 
            <SpotifyPlayer />
            </div>
            <Reviews/>
            {/* <button> Listen on Spotify </button>
            <button> Listen on Itunes </button>
            <button> Listen on apple music </button>
            <button> Listen on google play </button> */}

            </div>
        );
    }
}

export default ListeningParty;