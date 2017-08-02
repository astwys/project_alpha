import React, { Component } from 'react'

class Details extends Component {
	render() {
		const guid = this.props.match.params.guid

		return (
			<div>
				<h1>projectAlpha</h1>
				{guid}
			</div>
		)
	}
}

export default Details