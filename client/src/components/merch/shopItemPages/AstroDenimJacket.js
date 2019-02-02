import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';


class AstroDenimJacket extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                   <ShopItemDesc
                   itemName = "Astro Denim Jacket"
                   itemPrice = "$45.00"
                   bulletOne = "heres the first bullet"
                   bulletTwo = "heres the second bullet"
                   bulletThree = "heres the third bullet"
                   itemDesc= "this is the description for this item, blah, blah, blah, blah"
                   itemImage = "https://i.imgur.com/6Vai1WS.png?1"
               />
            </div>
        );
    }
}

export default AstroDenimJacket;