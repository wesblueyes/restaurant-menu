import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/screen.sass'

class Gallery1 extends Component {

  render() {
    return (
      <div><header>
      <h1>The Westland</h1>
      <h2>An Upscale Eatery in Historic Hyde Park North</h2>
      </header>
        <div className='gallery-image-box'>
        <div className='gallery-image'><img src='./images/breakfast/donuts.jpg'/>Breakfast</div>
        <div className='gallery-image'><img src='./images/lunch/garden-salad.jpg'/>Lunch Specials</div>
        <div className='gallery-image'><img src='./images/appetizers/cheese-plate.jpg'/>Appetizers</div>
        <div className='gallery-image'><img src='./images/dinner/pork-chop.jpg'/>Entrees</div>
        <div className='gallery-image'><img src='./images/beverages/blueberry-gin.jpg'/>Beverages</div>
        <div className='gallery-image'><img src='./images/dessert/pound-cake.jpg'/>Dessert</div>
      </div>
      </div>
    )
  }
}
export default Gallery1
