import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    addRestaurant: (formData)=>dispatch({type: 'ADD_RESTAURANT', text: formData.text}),
    deleteRestaurant: (restaurantId) => dispatch({type: 'DELETE_RESTAURANT', restaurantId})
  }
)

const mapStateToProps = ({restaurants}) => (
  {restaurants}
)
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);