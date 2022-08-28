import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
  const [counter,setCounter] = useCounter(10);

  const increment = (event) => {
	event.preventDefault();

	setCounter(counter => counter + 1)
  }

  const decrement = (event) => {
	event.preventDefault();

	setCounter(counter => counter - 1)
  }

  return (
	<div>
		<p>{counter}</p>
		<button onClick={increment}>Increment</button>
		<button onClick={decrement}>Decrement</button>
	</div>
  )
}

export default Counter