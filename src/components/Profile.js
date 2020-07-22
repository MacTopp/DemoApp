import React, { Component } from 'react'

export class Profile extends Component {
    state = {
        name: null
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        var name = this.props.match.params.id
        this.setState({name})
    }
	render() {
		return (
		<div >
			<h1>PROFILE</h1>
			<h1>{this.state.name}</h1>
		</div>
		)
	}
}

export default Profile
