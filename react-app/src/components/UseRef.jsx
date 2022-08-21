import React, { useRef } from 'react'

function UseRef() {
	const name = useRef()

	const submitHandler = (event) => {
		event.preventDefault();

		// console.log(name);
		name.current.style.border= "1px solid red";
	}
  return (
	<form onSubmit={submitHandler}>
		<input type="text" ref={name} />
		<p>{name.current}</p>
	</form>
  )
}

export default UseRef