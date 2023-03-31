import { CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image2 from "../../images/imageBlock2.svg";
import image3 from "../../images/imageBlock3.svg";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import "./Block2.css";

const Block2 = () => {
  const navigate = useNavigate();
  return (
    <Box className="Block2Container">
      <Box className="Block2Item">
        <Box className="BlockImg">
          <img src={image2} />
        </Box>
        <Box className="Block2TextBlock">
          <Typography className="Block2Title">
            Summer cactus & succulents
          </Typography>
          <Typography className="Block2Text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Typography>
          <IconButton onClick={() => navigate("/detils")} className="Block2Btn">
            Finde More
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className="Block2Item">
        <Box className="BlockImg">
          <img src={image3} />
        </Box>
        <Box className="Block2TextBlock">
          <Typography className="Block2Title">
            Summer cactus & succulents
          </Typography>
          <Typography className="Block2Text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </Typography>
          <IconButton onClick={() => navigate("/detils")} className="Block2Btn">
            Finde More
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Block2;
