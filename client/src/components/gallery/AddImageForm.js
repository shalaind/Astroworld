import React, { Component } from 'react';
import styled from 'styled-components'; 



class AddImageForm extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="username"/>
                <input type="file" placeholder="Submit Profile Photo"/>
                <input type="file" placeholder="Submit concert Photo"/>
                <select> Location </select>


                <button>Submit</button>

            </div>
        );
    }
}

export default AddImageForm;