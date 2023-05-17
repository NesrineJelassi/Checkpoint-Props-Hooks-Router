
import './App.css';
import Navbar from './Components/Navbar';
import Filterfilm from './Components/Filterfilm'
import Movielist from './Components/Movielist';
import moviesData from './Constent/Data'
import { useState } from 'react';

import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"
import Trailer from './Components/Trailer';

function App() {
  const [data,setData]=useState(moviesData)
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
  return (
    <div className="App">
    <Navbar setSearch={setSearch} setRate={setRate} rate={rate}/>
    <Routes>
    <Route path='/'element={<Home/>}/>
  
    <Route path ='/Movielist' element={ <Movielist  data={data} search={search} rate={rate} setData={setData}/>}/>
    <Route path='/trailer/:id' element={<Trailer data={data} />}/>
   </Routes>
  <Filterfilm/>
    
    </div>
  );
}

export default App;
