import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom'

import Home from 'sites/Home/Home'
import NewProject from 'sites/Project/New/New'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <ul>
				  <li><Link to='/'>Home</Link></li>
				  <li><Link to='/new'>Create New Project</Link></li>
			  </ul>
			  <Route exact path='/' component={Home} />
			  <Route path='/new' component={NewProject} />
		  </div>
	  </Router>
    )
  }
}

export default App