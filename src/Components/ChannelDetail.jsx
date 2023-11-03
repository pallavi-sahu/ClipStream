import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import {ChannelCard, Videos} from './';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null);
  const {id} = useParams();
  const [video, setvideo] = useState([]);

  console.log(channelDetail, video)

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setchannelDetail(data?.item[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideo(data?.item))

  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background:'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}/>
          <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm:'100px'}}}/>
            <Videos video={video}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
