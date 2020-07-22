import React, { Component } from 'react'

export class Affilitations extends Component {
    state = {
        affiliations: this.props.affil
    }
	render() {
		return (
			<div>
				<ul> Affiliations
                    {this.state.affiliations.map((val, i) => {
                        return <li key={i}>{val}</li>})}
                </ul>
			</div>
		)
	}
}

export default Affilitations
