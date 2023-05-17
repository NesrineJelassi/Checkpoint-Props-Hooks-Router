import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({data}) => {
    const{id}=useParams()
    const element=data.find((el)=>el.id==id)
  return (
    <div className='trailer-card'>
<div className='trailer'>
    <iframe
  width={560}
  height={315}
  src={element?.trailer}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen=""
/>
</div>
<div className='trailerbtn'>
<Link to='/movielist'><button className='but' >Movielist</button></Link>
</div>
    </div>
  )
}

export default Trailer
