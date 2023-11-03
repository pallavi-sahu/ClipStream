import React, { useState } from 'react'
import {Paper, IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handlesubmit = (e) =>{
    console.log('submit')
    e.preventDefault();
  
    if(searchTerm){
      
    }
  }

  return (
    <Paper
    component="form"
    onSubmit={handlesubmit}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        p1:2,
        boxShadow:'none',
        mr:{sm:5}
    }}
    >
     <input
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
     /> 
     <IconButton type='submit' sx={{p:'10px', color:'red'}}>
        <Search/>
     </IconButton>
    </Paper>
  )
}
 
export default SearchBar
