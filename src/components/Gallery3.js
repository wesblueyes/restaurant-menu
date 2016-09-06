import React from 'react'
import { Link } from 'react-router'
import '../styles/Gallery3.sass'

export default React.createClass({
  render () {
    return (
<div>
<header>
<div className='back-nav'><Link to='/gallery2'>&lt; Back to Album</Link></div>
<h1>Donut</h1>
</header>
<div className='one-image'><img src='./images/breakfast/donuts.jpg'/></div>
</div>
)
  }
})
