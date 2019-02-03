import React, { Component } from 'react';
import ShopItem from './ShopItem';
import styled from 'styled-components'; 
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';


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
                <Navbar />
                <PageHeader pageTitle = "Astro Merch" />

                <div class="container" style = {{marginBottom: "40px", marginTop: "40px", width: "60vw"}}>

                <ShopItems>
                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemImage = "https://i.imgur.com/VDpcc9m.png" alt="travis scott merch"
                        itemName = "Astro Hoodie" 
                        itemPrice = "$45.00"
                        />
                    <ShopItem 
                        itemLink = "astro-tie-dye-tshirt"
                        itemImage = "https://i.imgur.com/x3BwBou.png" alt="travis scott merch"
                        itemName = "Tie Dye Tee" 
                        itemPrice = "$60.00"
                    />
                    <ShopItem
                        itemLink = "astro-denim-jacket"
                        itemImage = "https://i.imgur.com/LmhV1AF.png" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$75.00"
                    />
                </ShopItems>
                <ShopItems>
                    <ShopItem
                        itemLink = "thrills-and-chills-hoodie"
                        itemImage = "https://i.imgur.com/uNvfHIV.png" alt="travis scott merch"
                        itemName = "Thrills and Chills Hoodie" 
                        itemPrice = "$78.00"
                    />
                    <ShopItem
                        itemLink = "thrills-and-chills-pants"
                        itemImage = "https://i.imgur.com/NL21iSE.png" alt="travis scott merch"
                        itemName = "Thrills and Chills SweatPants" 
                        itemPrice = "$85.00"
                    />
                    <ShopItem
                        itemLink = "astro-beanie"
                        itemImage = "https://i.imgur.com/21ojAKj.png" alt="travis scott merch"
                        itemName = "Astro Beanie" 
                        itemPrice = "$95.00"
                    />
                </ShopItems>
                </div>

            </div>
        );
    }
}

export default ShopList;