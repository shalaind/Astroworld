import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 

const Upload = styled.div`
img {
    width: 300px; 
}

`

class Images extends Component {
    state = {
        image: [{}]
      
}

componentDidMount() {
    this.getAllImages()
}

getAllImages = () => {
    axios.get(`/api/image`)
    .then((res) => this.setState({ image: res.data }))
}
    render() {
        return (
            <Upload>

            {this.state.image.map((concertPics, i) => (
                <div key={i}>
                    <img src={concertPics.imageUrl} alt="concert" />
                    <img src={concertPics.userImage} alt="concert" />
                    <h3>{concertPics.location}</h3>
                    <h3>{concertPics.name}</h3>

                </div>
                ))}

            </Upload>
        );
    }
}

export default Images;