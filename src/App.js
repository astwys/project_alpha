import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom'

import Home from 'sites/Home/Home'
import NewProject from 'sites/Project/New/New'
import Profile from 'sites/Profile/Profile'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <ul>
				  <li><Link to='/'>Home</Link></li>
				  <li><Link to='/new'>Create New Project</Link></li>
				  <li><Link to='/profile'>Profile Page</Link></li>
			  </ul>
			  <Route exact path='/' component={Home} />
			  <Route path='/new' component={NewProject} />
			  <Route path='/profile' component={Profile} />
		  </div>
	  </Router>
    )
  }
}

export default App