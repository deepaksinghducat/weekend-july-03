import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound';

const Home = () => {

  const params = useParams();

  console.log(params);

  return (
	<div>Home
    <Link to='/about'>About</Link>
    
  </div>
  )
}

export default Home