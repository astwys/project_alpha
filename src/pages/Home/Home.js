import React, { Component } from 'react'
import './Home.css'
import Preview from 'components/project/preview/preview'

const projects = [
	{
		name: 'Project1',
		description: 'This is the first project.'
	},
	{
		name: 'Project2',
		description: 'This is the second project.'
	},
	{
		name: 'Project3',
		description: 'This is the third project.'
	}
]

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="projects">
					{
						projects.map((project, i) => (
							<Preview project={project} key={i} />
						))
					}
				</div>
			</div>
		)
	}
}

export default Home