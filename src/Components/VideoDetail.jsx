import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";

import {Videos} from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const VideoDetail = () => {
  const [videos, setvideos] = useState(null);
  const [VideoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);

  if (!VideoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle", md: "h6"}} color='#fff'>
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
           

              <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
        <Videos video={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
