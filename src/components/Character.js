
import React, { Component } from 'react'
import axios from 'axios'
import Affiliations from './Affilitations'
import { NavLink } from 'react-router-dom'

export class Character extends Component {
	state = {
		persons: []
	}
	componentDidMount() {
		axios.get('https://akabab.github.io/starwars-api/api/all.json').then(res =>{
			const persons = res.data
			this.setState({persons});
            console.log(this.state)
        })
       
    }
    OnClick() {
        console.log('cloicked')
    }

	render() {
		return (
			<div className="cards">
				{this.state.persons.map((person, i) => 
                    <ul className="card" key={i}> 
                    <div className="card-inner"> 
                        <div className='card-front'>
                            <img  src={person.image} key={'image' + {i}} ></img>
                        </div>
                        <div className="card-back" >
                            <li key={'name' + {i}}>{person.name}</li>
                            <li key={'species' +  {i}}>{person.species}</li>
                            <NavLink to= {{
                             pathname:"/Profile/" + person.name,
                             }}>Profile</NavLink>

                        <div>
                                <Affiliations affil={person.affiliations}></Affiliations>
                            </div>
                        </div>
                    </div>
                    </ul>
                    )
				}
				
			</div>
		)
	}
}

export default Character
