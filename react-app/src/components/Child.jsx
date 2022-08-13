import React from 'react'

function Child(props) {
	console.log(props);

	props.parentFun('fsadfasf');

  return (
	<div>{props.name}</div>
  )
}

export default Child