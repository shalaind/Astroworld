import React, { Component } from 'react';


class FooterBottom extends Component {
    render() {
        return (
            <div className="footerBottom">
             <h3>© 2019 Grand Hustle Records, Inc. All Rights Reserved.</h3>
             <div style={{marginTop: "1px"}}>

             <a href= "https://www.instagram.com/travisscott/" target="blank"> <img style={{height: "25px"}} src="https://i.imgur.com/m0yGbKp.png" alt = "instagram" /></a>
             <a href= "https://www.facebook.com/travisscottlaflame/" target="blank"> <img style={{height: "25px"}} src="https://i.imgur.com/mkXrtkl.png" alt = "facebook" /></a> 
             <a href="https://twitter.com/trvisXX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="blank"> <img style={{height: "25px"}} src="https://i.imgur.com/7XrSJk7.png" alt = "instagram" /></a>
             </div>

            </div>
        );
    }
}

export default FooterBottom;