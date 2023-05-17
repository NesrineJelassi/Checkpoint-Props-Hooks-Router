import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='hom'>
    <h1>WELCOME</h1>
    <Link to="/Movielist"> <button className='but'>Movie liste</button> </Link>
    <div className='home'>
     <img src='https://thumbs.dreamstime.com/b/family-enjoying-movie-night-home-together-family-enjoying-movie-night-home-together-104864795.jpg' alt='404'/>
    </div>
    
    </div>
  )
}

export default Home
