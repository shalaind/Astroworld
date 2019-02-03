import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';

class AstroHoodie extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
               <ShopItemDesc
                   itemName = "Astro Hoodie"
                   itemPrice = "$45.00"
                   bulletOne = "Unisex Sizing"
                   bulletTwo = "Embroidered Astroworld Logo"
                   bulletThree = "100% Cotton"
                   itemDesc= "A classic hoodie for a classic album. "
                   itemImage = "https://i.imgur.com/VDpcc9m.png"
               />
            </div>
        );
    }
}

export default AstroHoodie;