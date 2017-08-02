import React, { Component } from 'react'
import './preview.css'

class Preview extends Component {
	render() {
		const { project } = this.props

		return (
			<div className="preview">
				<h2 className="title">
					{project.name}
				</h2>
				<p className="description">
					{project.description}
				</p>
			</div>
		)
	}
}

export default Preview