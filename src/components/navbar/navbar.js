import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
	componentDidMount() {
		this.setSideBar(true)

		window.addEventListener('resize', () => {
			this.setSideBar()
		})
	}

	setSideBar(init) {
		let display = null
		let width = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])

		if (init) {
			if (width > 50) {
				this.changeSideBar('block')
			} else {
				this.changeSideBar('none')
			}
		}
		else {
			display = document.getElementById('navbar').style.display
			if (width > 50 && display === 'none') {
				this.changeSideBar('block')
			} else if (width <= 50 && display === 'block') {
				this.changeSideBar('none')
			}
		}

	}

	changeSideBar(mode) {
		document.getElementById('navbar').style.display = mode
	}

	hideSideBar() {
		let width = window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])
		if (width <= 50) {
			document.getElementById('navbar').style.display = 'none'
		}
	}

	render() {
		return (
			<div className="navbar" id="navbar">
				<ul>
					<li><Link className="link" onClick={this.hideSideBar} to='/'>Home</Link></li>
					<li><Link className="link" onClick={this.hideSideBar} to='/project/new'>Create New Project</Link></li>
					<li><Link className="link" onClick={this.hideSideBar} to='/profile'>Profile Page</Link></li>
					<li><Link className="link" onClick={this.hideSideBar} to='/login'>Login</Link></li>
					<li><Link className="link" onClick={this.hideSideBar} to='/register'>Register</Link></li>
				</ul>
			</div>
		)
	}
}

export default Navbar