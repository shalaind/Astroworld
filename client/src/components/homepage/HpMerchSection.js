import React, { Component } from 'react';
import styled from 'styled-components';

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
                    <h1>Merch Img 1</h1>
                    <h1>Merch Img 2</h1>
                    <h1>Merch Img 3</h1>
                </MerchDiv>
                <ButtonDiv>
                    <button>View More</button>
                </ButtonDiv>

            </div>
        );
    }
}

export default HpMerchSection;