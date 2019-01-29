import React, { Component } from 'react';
import ShopItemDesc from '../ShopItemDesc';

class AstroTieDye extends Component {
    render() {
        return (
            <div>
                <ShopItemDesc
                   itemName = "Astro Hoodie"
                   itemPrice = "$45.00"
                   bulletOne = "heres the first bullet"
                   bulletTwo = "heres the second bullet"
                   bulletThree = "heres the third bullet"
                   itemDesc= "this is the description for this item, blah, blah, blah, blah"
                   itemImage = "https://stockx.imgix.net/products/streetwear/Travis-Scott-Astrowolrd-Wish-You-Were-Here-Hoodie-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1542407701"
                    />
            </div>
        );
    }
}

export default AstroTieDye;