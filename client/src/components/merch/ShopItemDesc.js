import React, { Component } from 'react';
import styled from 'styled-components'; 
import ShopItem from './ShopItem';
import Navbar from '../Navbar';

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
flex-direction: column; 
h3 {
    font-size: 30pt;
    font-family: 'Souvenir' 
}
img{
    width: 300px;
    margin: 50px; 
}
`

class ShopItemDesc extends Component {
    render() {
        return (
            <div>
            <Navbar/>

            <OutsideCon>
            <LeftColumn>
                <img src= {this.props.itemImage} alt="travis scott merch"/>
            </LeftColumn>
            <RightColumn>

                <h1 className= "itemName"> {this.props.itemName}</h1>
                <h2 className="itemPrice">{this.props.itemPrice}</h2> <br />

                <p>{this.props.itemDesc}</p>
                <ul>
                    <li> &#8226; {this.props.bulletOne}</li>
                    <li>&#8226; {this.props.bulletTwo}</li>
                    <li>&#8226; {this.props.bulletThree}</li>
                </ul> <br /> 
                <button className="button is-danger"> Add to Cart </button>
            </RightColumn>

            
            </OutsideCon>

                <RelatedItems>

                <div>
                <h3 class= "homepageMerch"> 
                <span style={{color: "gold"}}> R </span>
                <span style={{color: "red"}}> E </span>
                <span style={{color: "black"}}> L </span>
                <span style={{color: "blue"}}> A </span>
                <span style={{color: "magenta"}}> T </span>
                <span style={{color: "green"}}> E </span>
                <span style={{color: "orange"}}> D </span>
                &nbsp;
                <span style={{color: "grey"}}> I </span>
                <span style={{color: "gold"}}> T </span>
                <span style={{color: "red"}}> E </span>
                <span style={{color: "black"}}> M </span>
                <span style={{color: "blue"}}> S </span>

               </h3>

              </div>

            <div class="container" style={{display: "flex", marginBottom: "50px", textAlign: "center"}}>

                    <ShopItem 
                        itemLink = "astro-hoodie"
                        itemImage = "https://i.imgur.com/qU1lVDU.jpg" alt="travis scott merch"
                        itemName = "Astro Hoodie" 
                        itemPrice = "$45.00"
                        rollOver = "https://i.imgur.com/qU1lVDU.jpg"
                    />
                    <ShopItem 
                        itemLink = "astro-tie-dye-tshirt"
                        itemImage = "https://i.imgur.com/nyNTNdf.jpg" alt="travis scott merch"
                        itemName = "Tie Dye Tee" 
                        itemPrice = "$45.00"
                        rollOver = "https://i.imgur.com/IpS1Cwr.png"
                    />
                    <ShopItem 
                        itemLink = "astro-denim-jacket"
                        itemImage = "https://i.imgur.com/LmhV1AF.png" alt="travis scott merch"
                        itemName = "Astro Denim Jacket" 
                        itemPrice = "$45.00"
                        rollOver = "https://i.imgur.com/1WnvbBC.png"
                    />
            </div>
               
                </RelatedItems>

                
            </div>


            
        );
    }
}

export default ShopItemDesc;