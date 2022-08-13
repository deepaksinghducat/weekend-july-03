import React from 'react'

function Root(props) {

	console.log(props);
  return (
	<div>{props.children}</div>
  )
}

export default Root