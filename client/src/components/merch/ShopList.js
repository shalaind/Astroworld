import React, { Component } from 'react';
import ShopItem from './ShopItem';
import styled from 'styled-components'; 

const ShopItems = styled.div`
display: flex; 
img{
    width: 300px;
}

`

class ShopList extends Component {

    
    render() {
        return (
            <div>
                <h1>Merch</h1>
                <ShopItems>
                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemImage = "https://i.imgur.com/qU1lVDU.jpg" alt="travis scott merch"
                        itemName = "Astro Hoodie" 
                        itemPrice = "$45.00"
                        />
                    <ShopItem 
                        itemImage = "https://i.imgur.com/nyNTNdf.jpg" alt="travis scott merch"
                        itemName = "Wish You Were Here" 
                        itemPrice = "$60.00"
                    />
                    <ShopItem
                        itemImage = "https://i.imgur.com/6Vai1WS.png?1" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$75.00"
                    />
                </ShopItems>
                <ShopItems>
                    <ShopItem
                        itemImage = "https://i.imgur.com/xMOqSLy.jpg" alt="travis scott merch"
                        itemName = "Thrills and Chills Hoodie" 
                        itemPrice = "$78.00"
                    />
                    <ShopItem
                        itemImage = "https://i.imgur.com/L5pZYqi.jpg" alt="travis scott merch"
                        itemName = "Thrills and Chills SweatPants" 
                        itemPrice = "$85.00"
                    />
                    <ShopItem
                        itemImage = "https://i.imgur.com/oQXd5sS.jpg" alt="travis scott merch"
                        itemName = "Astro Beanie" 
                        itemPrice = "$95.00"
                    />
                </ShopItems>

            </div>
        );
    }
}

export default ShopList;