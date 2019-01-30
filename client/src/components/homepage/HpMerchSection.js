import React, { Component } from 'react';
import styled from 'styled-components';
import ShopItem from '../merch/ShopItem'; 

const textCenter = {
    textAlign: "center",
    fontSize: "22pt" 
}


const MerchDiv = styled.div`
width: 100vw; 
height: 50vh;
padding: 0px;
display: flex;
justify-content: center;
align-items: center; 
color: black; 

img {
    width: 300px; 
}


h1{
    margin: 0; 
    margin-right: 40px;
}
`

const ButtonDiv = styled.div`

display: flex; 
justify-content: center; 
button{
    margin: 50px; 
}
`

class HpMerchSection extends Component {
    render() {
        return (
            <div>
                <h1 style={textCenter}>Merchandise</h1>

                <MerchDiv>
                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemName = "Astro Hoodie"
                        itemPrice = "$45.00"
                        itemImage = "https://i.imgur.com/qU1lVDU.jpg"
                    />
                    <ShopItem 
                        itemLink = "astro-tie-dye-tshirt"
                        itemImage = "https://i.imgur.com/nyNTNdf.jpg" alt="travis scott merch"
                        itemName = "Tie Dye Tee" 
                        itemPrice = "$60.00"
                    />
                    <ShopItem 
                        itemLink = "astro-denim-jacket"
                        itemImage = "https://i.imgur.com/6Vai1WS.png?1" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$75.00"
                    />
                </MerchDiv>

                <ButtonDiv>
                    <button>View More</button>
                </ButtonDiv>

            </div>
        );
    }
}

export default HpMerchSection;