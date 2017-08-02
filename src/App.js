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
import Register from 'pages/Register/Register'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <ul>
				  <li><Link to='/'>Home</Link></li>
				  <li><Link to='/new'>Create New Project</Link></li>
				  <li><Link to='/profile'>Profile Page</Link></li>
				  <li><Link to='/login'>Login</Link></li>
				  <li><Link to='/register'>Register</Link></li>
			  </ul>

			  <Route exact path='/' component={Home} />
			  <Route path='/new' component={NewProject} />
			  <Route path='/profile' component={Profile} />
			  <Route path='/login' component={Login} />
			  <Route path='/register' component={Register} />
		  </div>
	  </Router>
    )
  }
}

export default App