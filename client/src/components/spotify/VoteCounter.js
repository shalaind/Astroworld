import React, { Component } from 'react';


class VoteCounter extends Component {
    state = {
        likeCount: 0, 
        dislikeCount: 0
    }

    likeCounter = () => {
        this.setState({
          likeCount: this.state.likeCount + 1
        });
    }


    dislikeCounter = () => {
        this.setState({
          dislikeCount: this.state.dislikeCount + 1
        });
    }

    render() {
        return (


      <div>
      <button onClick= {this.likeCounter}> thumbs up</button>
      <h4> {this.state.likeCount} </h4>

         <button onClick = {this.dislikeCounter}> thumbs down</button>
      <h4> {this.state.dislikeCount}</h4>
    </div>




        );
    }
}

export default VoteCounter;




