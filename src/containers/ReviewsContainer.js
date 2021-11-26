import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          addReview={this.props.addReview} 
          restaurantId={this.props.restaurant.id} 
        />
        <Reviews 
          reviews={this.props.reviews} 
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    addReview: (formData)=>dispatch({type: 'ADD_REVIEW', review: formData}),
    deleteReview: (reviewId) => dispatch({type: 'DELETE_REVIEW', reviewId}),
  }
)

const mapStateToProps = ({reviews}) => (
  {reviews}
)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
