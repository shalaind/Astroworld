import React, { Component } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'; 
import AddImageForm from './AddImageForm'; 

const Upload = styled.div`
img {
    width: 300px; 
}

`
class Images extends Component {
    state = {
        image: [{}],
        imageFormVisible: false
    }
  
componentDidMount() {
    this.getAllImages()
}

getAllImages = () => {
    axios.get(`/api/image`)
    .then((res) => 
    // console.log(res.data)
    
    this.setState({ image: res.data })
    )
}

deleteImage = (imageId) => {
    axios.delete(`/api/image/${imageId}`).then(()=> {
        this.setState({
            image: this.state.image.filter(item => item._id !== imageId)
        })
    })
}

toggleAddImageForm = () => {
    this.setState({ imageFormVisible: !this.state.imageFormVisible })
}

    render() {
        return (

            <div>

                <Upload>

                    {this.state.image.map((concertPics, i) => (
                        <div key={i}>
                            <img src={concertPics.imageUrl} alt="concert" />
                            <h3>{concertPics.location}</h3>
                            <h3>{concertPics.name}</h3>
                            <button onClick={()=>(this.deleteImage(concertPics._id))}>Delete</button>
                        </div>
                    ))}

                </Upload>

               <p className= "pointer" onClick= {this.toggleAddImageForm}>Add a pic</p>
                {this.state.imageFormVisible ? <AddImageForm getAllImages={this.getAllImages}
                    toggleAddImageForm={this.toggleAddImageForm}/>
                  : null}
                
            </div>
        );
    }
}

export default Images;