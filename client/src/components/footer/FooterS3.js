import React, { Component } from 'react';

class FooterS3 extends Component {
    render() {
        return (
            <div className="footerSect">
                 <h1>Tour Dates</h1>
                 <ul>
                     <li>Vancouver - 01/25/19</li>
                     <li>Portland - 01/27/19</li>
                     <li>Tacoma - 01/29/19 </li>
                     <li>San Diego - 02/04/19</li>
                     <a href="http://ticketmaster.com" target="blank">View All</a>
                 </ul>
                 <a href="http://ticketmaster.com" target="blank"><img class="pointer" style={{width:"150px", marginTop: "10pt"}}src="https://i.imgur.com/CiWATtn.png" alt="ticketmaster" /></a>

            </div>
        );
    }
}

export default FooterS3;