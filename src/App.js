import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom'

import Home from 'pages/Home/Home'
import NewProject from 'pages/Project/New/New'
import Profile from 'pages/Profile/Profile'
import Login from 'pages/Login/Login'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <ul>
				  <li><Link to='/'>Home</Link></li>
				  <li><Link to='/new'>Create New Project</Link></li>
				  <li><Link to='/profile'>Profile Page</Link></li>
				  <li><Link to='/login'>Profile Page</Link></li>
			  </ul>
			  
			  <Route exact path='/' component={Home} />
			  <Route path='/new' component={NewProject} />
			  <Route path='/profile' component={Profile} />
			  <Route path='/login' component={Login} />
		  </div>
	  </Router>
    )
  }
}

export default App