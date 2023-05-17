import React from 'react'
import Moviecard from './Moviecard'
import Addfilm from './Addfilm'

const Movielist = ({data,search,rate,setData}) => {
  
  return (
    <div className ='cards'>
    <div className='bntmvlst'>
    <Addfilm setData={setData} data={data}/>
    </div>
      <div className='lst'>
      {
        data.filter((element)=>element.name.toUpperCase().includes(search.toUpperCase()) && element.rating>=rate).map((element)=><Moviecard key={element.id} element={element}/>)
        
      }
    </div>
    </div>
  )
}

export default Movielist
