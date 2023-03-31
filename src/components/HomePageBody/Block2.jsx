import { CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image2 from "./img/imageBlock2.svg";
import image3 from "./img/imageBlock3.svg";
import EastIcon from "@mui/icons-material/East";
const Block2 = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            sx={{ height: 140, width: "10%", border: " 2px solid black" }}
            src={image2}
          />
        </Box>
        <Box sx={{ marginTop: "18%" }}>
          <Typography
            sx={{ display: " flex", justifyContent: "end" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Summer cactus & succulents
          </Typography>
          <Typography
            sx={{ display: " flex", justifyContent: "end", textAlign: "end" }}
          >
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Typography>
          <IconButton style={{ marginLeft: "68%" }}>
            Finde More
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <img
            sx={{ height: 140, width: "10%", border: " 2px solid black" }}
            src={image3}
          />
        </Box>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Summer cactus & succulents
          </Typography>
          <Typography>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Typography>
          <IconButton>
            Finde More
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Block2;
