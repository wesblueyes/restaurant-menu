import React from 'react'
import { Link } from 'react-router'
import '../styles/Gallery2.sass'

export default React.createClass({
  render () {
    return (
    <div>
    <header>
    <div><h1>Breakfast</h1></div>
    </header>
    <div className='main-content'>
    <sidebar>
    <ul>
    <li><Link to='/gallery2'><img src='./images/breakfast/donuts.jpg'/>Breakfast</Link></li>
    <li><Link to='/gallery2'><img src='./images/lunch/garden-salad.jpg'/>Lunch Specials</Link></li>
    <li><Link to='/gallery2'><img src='./images/appetizers/cheese-plate.jpg'/>Appetizers</Link></li>
    <li><Link to='/gallery2'><img src='./images/dinner/pork-chop.jpg'/>Entrees</Link></li>
    <li><Link to='/gallery2'><img src='./images/beverages/blueberry-gin.jpg'/>Beverages</Link></li>
    <li><Link to='/gallery2'><img src='./images/dessert/pound-cake.jpg'/>Dessert</Link></li>
    </ul>
    </sidebar>
    <content>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/assorted-pastries.jpg'/>Assorted Pastries</Link></div>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/chicken-n-waffles.jpg'/>Chicken and Waffles</Link></div>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/donuts.jpg'/>Donuts</Link></div>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/granola-fruit.jpg'/>Granola and Fruit</Link></div>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/latte.jpg'/>Latte</Link></div>
    <div className='gallery-image'><Link to='/gallery3'><img src='./images/breakfast/strawberry-toast.jpg'/>Toast with Strawberry Jam</Link></div>
    </content>
    </div>
    </div>
  )
  }
})
