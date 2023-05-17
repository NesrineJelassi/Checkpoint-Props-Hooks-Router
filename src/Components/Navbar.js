import { Rating } from '@mui/material'
import React from 'react'
import {FaHome,FaClipboardList,FaPhoneAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'


const Navbar = ({setSearch,setRate,rate}) => {
  return (
  <div className='nbr'>
      <Link to='/'> <img className='imgnb' src='https://s3-eu-west-1.amazonaws.com/tpd/logos/46e279020000640005014718/0x0.png' alt='404'/></Link>
       <div className='nvb'>
       
     
       <Rating onChange={(e)=>setRate(Number(e.target.value))}
    name="simple-controlled"
    value={rate}
      />
       <input type='text' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
       </div>
      
  </div>
  )
}

export default Navbar
