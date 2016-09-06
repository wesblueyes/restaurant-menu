import React from 'react'
import { Link } from 'react-router'
import '../styles/screen.sass'

export default React.createClass({

render () {
  return (
      <div><header>
      <h1>The Westland</h1>
      <h2>An Upscale Eatery in Historic Hyde Park North</h2>
      </header>
        <div className='gallery-image-box'>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/breakfast/donuts.jpg'/>Breakfast</Link></div>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/lunch/garden-salad.jpg'/>Lunch Specials</Link></div>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/appetizers/cheese-plate.jpg'/>Appetizers</Link></div>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/dinner/pork-chop.jpg'/>Entrees</Link></div>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/beverages/blueberry-gin.jpg'/>Beverages</Link></div>
        <div className='gallery-image'><Link to='/gallery2'><img src='./images/dessert/pound-cake.jpg'/>Desserts</Link></div>
      </div>
      </div>
    )
    }
  })
