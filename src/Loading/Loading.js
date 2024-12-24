import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f0f0" // Customize the background color
    >
      <CircularProgress size={40} color="primary" />{" "}
    </Box>
  );
};

export default Loading;
