import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type="text"
            placeholder="text"
            value={this.state.text}
            onChange={this.handleOnChange}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
