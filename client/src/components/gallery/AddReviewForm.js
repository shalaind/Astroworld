import React, { Component } from 'react';

class AddReviewForm extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Name"/><br/>
                <input type="text" placeholder="Location"/><br/>
                <input type="text" placeholder="Comment"/><br/>
                <button>Submit</button>
            </div>
        );
    }
}

export default AddReviewForm;