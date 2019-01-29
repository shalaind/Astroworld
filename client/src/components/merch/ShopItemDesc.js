import React, { Component } from 'react';
import styled from 'styled-components'; 
import ShopItem from './ShopItem';

const OutsideCon = styled.div`
display: flex; 
`

const RightColumn = styled.div`
flex: 50%; 
`

const LeftColumn = styled.div`
flex: 50%; 
img{
    width: 800px;
    margin: 50px; 
}
`

const RelatedItems = styled.div`
display: flex; 
img{
    width: 300px;
    margin: 50px; 
}
`

class ShopItemDesc extends Component {
    render() {
        return (
            <div>

            <OutsideCon>
            <LeftColumn>
                <img src= {this.props.itemImage} alt="travis scott merch"/>
            </LeftColumn>
            <RightColumn>

                <h1> {this.props.itemName}</h1>
                <h2>{this.props.itemPrice}</h2>
                <p>{this.props.itemDesc}</p>
                <ul>
                    <li>{this.props.bulletOne}</li>
                    <li>{this.props.bulletTwo}</li>
                    <li>{this.props.bulletThree}</li>
                </ul>
                <button> Add to Cart </button>
            </RightColumn>

            
            </OutsideCon>

                <RelatedItems>
                <h1>Related Items</h1>
                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemImage = "https://i.imgur.com/qU1lVDU.jpg" alt="travis scott merch"
                        itemName = "Astro Hoodie" 
                        itemPrice = "$45.00"
                    />
                    <ShopItem 
                        itemLink = "astro-tie-dye-tshirt"
                        itemImage = "https://i.imgur.com/nyNTNdf.jpg" alt="travis scott merch"
                        itemName = "Tie Dye Tee" 
                        itemPrice = "$45.00"
                    />
                    <ShopItem 
                        itemLink = "astro-denim-jacket"
                        itemImage = "https://i.imgur.com/6Vai1WS.png?1" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$45.00"
                    />
               
                </RelatedItems>

                
            </div>


            
        );
    }
}

export default ShopItemDesc;