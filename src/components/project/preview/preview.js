import React, { Component } from 'react'
import './preview.css'

class Preview extends Component {
	sliceDescription(description) {
		return description.slice(0, 100)
	}

	render() {
		const { project } = this.props

		return (
			<div className="preview">
				<div className="name">
					{project.name}
				</div>
				<div className="description">
					{this.sliceDescription(project.description)}
				</div>
			</div>
		)
	}
}

export default Preview