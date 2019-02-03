import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';


class ThrillsAndChillsPants extends Component {
    render() {
        return (
            <div>
                   <ShopItemDesc
                   itemName = "Thrills and Chills Pants"
                   itemPrice = "$45.00"
                   bulletOne = "heres the first bullet"
                   bulletTwo = "heres the second bullet"
                   bulletThree = "heres the third bullet"
                   itemDesc= "this is the description for this item, blah, blah, blah, blah"
                   itemImage = "https://i.imgur.com/NL21iSE.png"
                    />
            </div>
        );
    }
}

export default ThrillsAndChillsPants;