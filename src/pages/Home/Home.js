import React, { Component } from 'react'
import './Home.css'
import Preview from 'components/project/preview/preview'

const projects = [
	{
		name: 'Project1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	},
	{
		name: 'Project2',
		description: 'This is the second project.'
	},
	{
		name: 'Project3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem corporis commodi rerum'
	},
	{
		name: 'Project4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sed minus eos aliquid obcaecati ullam quia expedita fugiat! Soluta dolorem rerum harum odit ipsam'
	},
	{
		name: 'Project5',
		description: 'This is the fifth project.'
	},
	{
		name: 'Project6',
		description: 'Lorem ipsum dolor sit amet'
	},
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