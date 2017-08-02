import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<ul>
					<li><Link className="link" to='/'>Home</Link></li>
					<li><Link className="link" to='/new'>Create New Project</Link></li>
					<li><Link className="link" to='/profile'>Profile Page</Link></li>
					<li><Link className="link" to='/login'>Login</Link></li>
					<li><Link className="link" to='/register'>Register</Link></li>
				</ul>
			</div>
		)
	}
}

export default Navbar