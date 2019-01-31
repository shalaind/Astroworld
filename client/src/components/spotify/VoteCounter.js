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
      <img onClick= {this.dislikeCounter} style={{ width: "50px" }}src="https://i.imgur.com/ZBMl2gT.png" alt="thumbs down" />
      <h4> {this.state.dislikeCount} </h4>


      <img onClick= {this.likeCounter} style={{ width: "50px" }}src="https://i.imgur.com/bGt59sB.png" alt="thumbs up" />
      <h4> {this.state.likeCount}</h4>
    </div>




        );
    }
}

export default VoteCounter;




