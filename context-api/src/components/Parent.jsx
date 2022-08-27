import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
	<div><Child name={props.name}/></div>
  )
}

export default Parent