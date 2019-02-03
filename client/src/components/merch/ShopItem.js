import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ShopItem extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div style={{textAlign: "center", display: "flex"}}>
                <div style= {{display: "flex", flexDirection: "column"}}>

                <Link to={ {
                            pathname:`/merch/${this.props.itemLink}` 
                        }
                    }>
                <img src= {this.props.itemImage} alt="merch"  onMouseOver={e => (e.currentTarget.src = this.props.rollOver)} onMouseOut={e => (e.currentTarget.src = this.props.itemImage )}/>
                
                </Link>
                <h1 className = "merchTitle">{this.props.itemName}</h1>
                <h2 className= "merchPrice">{this.props.itemPrice}</h2>
                </div>

            </div>
        );
    }
}

export default ShopItem;