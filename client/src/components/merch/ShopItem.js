import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ShopItem extends Component {
    render() {
        return (
            <div>
                <Link to={ {
                            pathname:`/merch/${this.props.itemLink}` 
                        }
                    }>
                <img src= {this.props.itemImage} alt="merch" />
                
                </Link>
                <h1>{this.props.itemName}</h1>
                <h2>{this.props.itemPrice}</h2>
            </div>
        );
    }
}

export default ShopItem;