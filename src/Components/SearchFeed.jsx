import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";

import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setvideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography varient="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search Result for <span style={{ color: "#F31503" }}>{searchTerm}</span>videos
      </Typography>
      <Videos video={videos} />
    </Box>
  );
};

export default SearchFeed;
