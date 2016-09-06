import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Gallery2 from './components/Gallery2'
import Gallery3 from './components/Gallery3'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
  <Route path="/" component={App}/>
  <Route path="/gallery2" component={Gallery2}/>
  <Route path="/gallery3" component={Gallery3}/>
  </Router>
), document.getElementById('root'))
