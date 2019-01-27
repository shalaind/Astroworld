import React, { Component } from 'react';

class AddImageForm extends Component {
    render() {
        return (
            <div>
                <h1>Image Form</h1>
                <input type="text" placeholder="Submit Photo"/>
                <button>Submit</button>

            </div>
        );
    }
}

export default AddImageForm;