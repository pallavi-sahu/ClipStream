import { Box, Stack } from "@mui/material";
import React from "react";
import {VideoCard, ChannelCard} from "./";


const Videos = ({video}) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {video.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channeldetail={item}/>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
