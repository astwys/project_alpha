import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import 'App.css'

import Navbar from 'components/navbar/navbar'

import Home from 'pages/Home/Home'
import ProjectNew from 'pages/Project/New/New'
import ProjectDetails from 'pages/Project/Details/Details'
import Profile from 'pages/Profile/Profile'
import Login from 'pages/Login/Login'
import Register from 'pages/Register/Register'

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route path='/project/new' component={ProjectNew} />
			<Route path='/project/details/:guid' component={ProjectDetails} />
			<Route path='/profile' component={Profile} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		  </div>
	  </Router>
    )
  }
}

export default App