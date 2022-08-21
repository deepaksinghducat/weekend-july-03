import React, { Component } from 'react'

export default class Employee extends Component {
  constructor(props) {
	super();

	this.state = {
		firstName: 'asdfasf',
		lastName: 'fdsafsaf',
		age: 20
	}

  }

  submitHandler = (event) => {
	event.preventDefault();
	console.log(this.state);
  }

  render() {
	return (
	  <div>
		<form onSubmit={this.submitHandler}>
			<div>
				<input type="text" value={this.state.firstName} onChange={(e) =>{
					this.setState({firstName: e.target.value})
				}} />
			</div>
			<div>
				<input type="text" value={this.state.lastName} onChange={(e) =>{
					this.setState({lastName: e.target.value})
				}} />
			</div>
			<div>
				<input type="text" value={this.state.age} onChange={(e) =>{
					this.setState({age: e.target.value})
				}} />
			</div>
			<button type="submit" >Add Details</button>
		</form>
		<p>FirstName: {this.state.firstName}</p>
		<p>LastName: {this.state.lastName}</p>
		<p>Age: {this.state.age}</p>
	  </div>
	)
  }
}
