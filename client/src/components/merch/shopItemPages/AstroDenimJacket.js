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
                   bulletOne = "Unisex Sizing"
                   bulletTwo = "Custom hand-painted design"
                   bulletThree = "Acid Wash Denim"
                   itemDesc= "Impress the earthlings with this hand painted denim jacket."
                   itemImage = "https://i.imgur.com/LmhV1AF.png"
               />
            </div>
        );
    }
}

export default AstroDenimJacket;