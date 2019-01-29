import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';


class ThrillsAndChillsHoodie extends Component {
    render() {
        return (
            <div>
                <ShopItemDesc
                   itemName = "Thrills and Chills Hoodie"
                   itemPrice = "$45.00"
                   bulletOne = "heres the first bullet"
                   bulletTwo = "heres the second bullet"
                   bulletThree = "heres the third bullet"
                   itemDesc= "this is the description for this item, blah, blah, blah, blah"
                   itemImage = "https://i.imgur.com/xMOqSLy.jpg"
                    />
            </div>
        );
    }
}

export default ThrillsAndChillsHoodie;