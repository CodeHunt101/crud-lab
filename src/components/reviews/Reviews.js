import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props.reviews)
    return (
      <ul>
        {this.props.reviews
        .filter(review => review.restaurantId === this.props.restaurantId)
        .map((review, idx) => <Review key={idx} review={review} deleteReview={this.props.deleteReview}/>)
        }
      </ul>
    );
  }
};

export default Reviews;