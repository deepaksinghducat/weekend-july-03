import React, { useState } from 'react'

const useCounter = (value) => {
	const [counter,setCounter] = useState(value);

	return [counter,setCounter];
}

export default useCounter