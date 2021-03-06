import React, { Component } from 'react';
import ShopItem from '../merch/ShopItem'; 
import { Link } from 'react-router-dom'; 


class HpMerchSection extends Component {
    render() {
        return (
            <div className= 'hpOuter'>
                <h1 className= "homepageMerch">
                <span style={{color: "gold"}}>M</span>
                <span style={{color: "red"}}>E</span>
                <span style={{color: "black"}}>R</span>
                <span style={{color: "blue"}}>C</span>
                <span style={{color: "magenta"}}>H</span>
                <span style={{color: "green"}}>A</span>
                <span style={{color: "orange"}}>N</span>
                <span style={{color: "grey"}}>D</span>
                <span style={{color: "gold"}}>I</span>
                <span style={{color: "red"}}>S</span>
                <span style={{color: "black"}}>E</span>
                </h1>

                <div className='hpMerch'>
                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemName = "Astro Hoodie"
                        itemPrice = "$45.00"
                        itemImage = "https://i.imgur.com/qU1lVDU.jpg"
                        rollOver = "https://i.imgur.com/qU1lVDU.jpg"
                    />
                    <ShopItem 
                        itemLink = "astro-tie-dye-tshirt"
                        itemImage = "https://i.imgur.com/nyNTNdf.jpg" alt="travis scott merch"
                        itemName = "Tie Dye Tee" 
                        itemPrice = "$60.00"
                        rollOver = "https://i.imgur.com/IpS1Cwr.png"
                    />
                    <ShopItem 
                        itemLink = "astro-denim-jacket"
                        itemImage = "https://i.imgur.com/LmhV1AF.png" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$75.00"
                        rollOver = "https://i.imgur.com/1WnvbBC.png"
                    />

                </div>


                <div className='buttonDiv'>
                <Link to= '/merch' class="button is-warning"> Shop Now </Link>
                </div>

            </div>
        );
    }
}

export default HpMerchSection;