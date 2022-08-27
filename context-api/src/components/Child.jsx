import React from 'react'
import SubChild from './SubChild'

const Child = (props) => {
  return (
	<div><SubChild name={props.name} /></div>
  )
}

export default Child