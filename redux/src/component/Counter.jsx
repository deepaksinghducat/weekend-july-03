import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    )
}

export default Counter