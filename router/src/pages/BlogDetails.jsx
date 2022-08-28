import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {

  const params = useParams();
  // console.log(params);

  const navigate = useNavigate();
  
  useEffect(() => {
    // navigate('/about')
  })

  return (
	<div>BlogDetails</div>
  )
}

export default BlogDetails