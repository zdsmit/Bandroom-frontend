import React, { Component } from 'react'

class LikeButton extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false,
      rating: 0,
      buttonText: "Like This Store"
    }
  }

  updateRating = () => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true,
        rating: this.state.rating + 1,
        buttonText: "Store Liked!"
      })
    } else if (this.state.clicked === true) {
      this.setState({
        clicked: false,
        rating: this.state.rating - 1,
        buttonText: "Like This Store"
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.updateRating()}>{this.state.buttonText}</button>
        <p>Likes: {this.state.rating}</p>
      </div>
    )
  }

}

export default LikeButton