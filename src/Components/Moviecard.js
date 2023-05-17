import { Rating } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom'

const Moviecard = ({element}) => {
  return (
    <div className ='cardd'>
      <img width="167px" height="291px" src={element.image} alt='404'/>
      <div className='elm'>
      <h4>Title: {element.name}</h4>
      <Rating name="read-only" value={element.rating} readOnly />
      <p>Date: {element.date} </p>
      <p>Type: {element.type} </p>
      <p>Description: {element.description} </p>
      <Link to ={`/trailer/${element.id}`}> <button className='but'>Trailer</button></Link>
      

      </div>
    </div>
  )
}

export default Moviecard
