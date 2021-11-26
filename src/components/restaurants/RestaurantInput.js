import React, { Component } from 'react';

export default class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    // console.log(this.props)
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


