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
                <img src= "https://stockx.imgix.net/products/streetwear/Travis-Scott-Astrowolrd-Wish-You-Were-Here-Hoodie-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1542407701" alt="travis scott merch"/>
            </LeftColumn>
            <RightColumn>

                <h1> Item Name</h1>
                <h2>$45.00</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul>
                    <li>Property 1</li>
                    <li>Property 2</li>
                    <li>Property 3</li>
                </ul>
                <button> Add to Cart </button>
            </RightColumn>

            
            </OutsideCon>

                <RelatedItems>
                <h1>Related Items</h1>
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                </RelatedItems>

                
            </div>


            
        );
    }
}

export default ShopItemDesc;