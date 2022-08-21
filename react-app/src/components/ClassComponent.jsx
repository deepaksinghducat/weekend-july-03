import React, { Component } from 'react'

export default class ClassComponent extends Component {

	constructor(props) {
		super()
		this.state = {name: 'deepak'}
	}

	componentDidMount() {
		this.setState({name:"fdsafsafdsfa"})
	}	

	componentDidUpdate() {

	}


  render() {
	return (
	  <div>{this.state.name}</div>
	)
  }
}
