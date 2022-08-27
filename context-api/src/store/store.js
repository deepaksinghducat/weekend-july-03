import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { counterReducer } from "../reducers/CounterReducer";



const initialValue = {
	counter: 200,
	increment: () => { },
	decrement: () => { }
}

const CounterContext = React.createContext(initialValue);

export const CounterContextProvider = (props) => {

	const [counterReducerStateValue, dispatchCounterReducer] = useReducer(counterReducer, initialValue)

	const increment = () => {
		dispatchCounterReducer({ type: "increment" })
	}

	const decrement = () => {
		dispatchCounterReducer({ type: "decrement" })
	}

	return (
		<CounterContext.Provider value={{
			...initialValue,
			counter: counterReducerStateValue.counter,
			increment,
			decrement

		}}>
			{props.children}
		</CounterContext.Provider>
	)
}

export default CounterContext;