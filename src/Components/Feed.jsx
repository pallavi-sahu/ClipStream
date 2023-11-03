import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {SideBar, Videos} from './'

import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
          <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
          <Typography className='copyright' varient='body2' sx={{mt:1.5, color:'#fff'}}>
            copyright 2023 @ pallavi sahu
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography varient='h4'
        fontWeight="bold" mb={2} 
        sx={{color:'white'}}
        >
          {selectedCategory} <span style={{color:'#F31503'}}>
          Videos
          </span>
        </Typography>
        <Videos video={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
