import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ShopItem extends Component {
    render() {
        return (
            <div style={{textAlign: "center", display: "flex"}}>
                <div style= {{display: "flex", flexDirection: "column"}}>

                <Link to={ {
                            pathname:`/merch/${this.props.itemLink}` 
                        }
                    }>
                <img src= {this.props.itemImage} alt="merch" />
                
                </Link>
                <h1 style={{fontSize: "12pt"}}>{this.props.itemName}</h1>
                <h2>{this.props.itemPrice}</h2>
                </div>

            </div>
        );
    }
}

export default ShopItem;