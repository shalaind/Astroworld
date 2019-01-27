import React, { Component } from 'react';
import axios from 'axios'; 



class AddImageForm extends Component {
    state = {
        image: {
            name: '',
            location: '',
            imageUrl: ''
        }
    }

 
    handleChange = (event) => {
        const newState = { ...this.state.image }
        newState[event.target.name] = event.target.value
        this.setState({ image: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const imageUpload = this.state.image
        axios.post('/api/images', imageUpload)
        .then((res) => {
            this.props.getAllImages()
            this.props.toggleAddImageForm()
        })
    }

    render() {
        return (
            <div>
            <form onSubmit= {this.handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={this.state.image.name}/><br/>
                <input type="text" placeholder="Location" name="location" value={this.state.image.location}/><br/>
                <input type="text" placeholder="Concert Image" name="imageUrl" value={this.state.image.imageUrl}/><br/>

                <button type="submit">Submit</button>
            </form>

            </div>
        );
    }
}

export default AddImageForm;