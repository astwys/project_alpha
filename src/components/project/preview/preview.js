import React, { Component } from 'react'

class Preview extends Component {
	render() {
		const { project } = this.props

		return (
			<div className="preview">
				<p className="title">
					{project.name}
				</p>
				<p className="description">
					{project.description}
				</p>
			</div>
		)
	}
}

export default Preview