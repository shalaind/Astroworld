import React, { Component } from 'react';

class FooterS1 extends Component {
    render() {
        return (
            <div className = "footerCon">
                <h1>Get The Album</h1>
               <img style={{width: "170px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Astroworld_by_Travis_Scott.jpg/220px-Astroworld_by_Travis_Scott.jpg" alt = "astroworld" />
            <div className = "innerFooterCon">
            <a href="https://itunes.apple.com/us/album/astroworld/1421241217" target="blank">   <img style={{height: "50px"}} src="https://i.imgur.com/eqcfH0O.png" alt="itunes"/> </a> <a href="https://play.google.com/store/music/album?id=Bhe6uuwbwjbo5qvkmbjeas5feye" target="blank"> <img style={{height: "50px"}} src="https://i.imgur.com/IEphnfJ.png" alt="googleplay"/></a>
            </div>


            </div>
        );
    }
}

export default FooterS1;