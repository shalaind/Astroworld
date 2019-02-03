import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';


class AstroBeanie extends Component {

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                    <ShopItemDesc
                   itemName = "Astro Beanie"
                   itemPrice = "$45.00"
                   bulletOne = "One size fits all"
                   bulletTwo = "Embroidered Astroworld Logo"
                   bulletThree = "100% Cotton"
                   itemDesc= "Keep your head warm, while you're traveling the galaxy with this extra cozy Astroworld Beanie."
                   itemImage = "https://i.imgur.com/21ojAKj.png"
                    />
            </div>
        );
    }
}

export default AstroBeanie;