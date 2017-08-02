import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom'

import Home from 'sites/Home/Home'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <ul>
				  <li><Link to='/'>Home</Link></li>
			  </ul>
			  <Route exact path='/' component={Home} />
		  </div>
	  </Router>
    )
  }
}

export default App
