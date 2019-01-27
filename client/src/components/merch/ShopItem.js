import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ShopItem extends Component {
    render() {
        return (
            <div>
                <Link to='/merch/itemdesc'><img src= "https://stockx.imgix.net/products/streetwear/Travis-Scott-Astrowolrd-Wish-You-Were-Here-Hoodie-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1542407701" alt="travis scott merch"/></Link>

                <h1>Name of Item</h1>
                <h2>$45.00</h2>
            </div>
        );
    }
}

export default ShopItem;