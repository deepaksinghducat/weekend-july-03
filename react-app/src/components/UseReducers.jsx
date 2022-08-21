import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { counterReducer } from './CounterReducer';

function UseReducers() {
  const [counterRed,dispatchCounter] = useReducer(counterReducer,{
	counter: 12
  })

  const IncrementCounter = (event) => {
	event.preventDefault();

	console.log("increment counter");

	dispatchCounter({type: 'increment', data : 10})
  }

  useEffect(() => {
	console.log(counterRed);
  },[counterRed])

  return (
	<div style={{
		textAlign: 'center'
	}}>{counterRed.counter}
	<button type="button" onClick={IncrementCounter}>Increment</button></div>
  )
}

export default UseReducers
