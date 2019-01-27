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
                    <ShopItem/>
                    <ShopItem/>
                    <ShopItem/>
                </ShopItems>
                <ShopItems>
                    <ShopItem/>
                    <ShopItem/>
                    <ShopItem/>
                </ShopItems>

            </div>
        );
    }
}

export default ShopList;