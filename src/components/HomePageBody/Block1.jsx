import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";
import "./Block1.css";
export default function Block1() {
  return (
    <div className="headerof-block1">
      <h1 style={{ display: "flex", justifyContent: "center" }} variant="h5">
        Our Blog Posts
      </h1>
      <Typography className="second-porsgraph" color="gray">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </Typography>
      <Box
        className="block2__container"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Card
          className="block2__item-card"
          sx={{
            maxWidth: 300,
            backgroundColor: "#FBFBFB",
            boxShadow: "none ",
          }}
        >
          <CardMedia
            className="imgOfBlock2"
            sx={{ height: 195 }}
            image="https://i.pinimg.com/564x/cf/d5/9b/cfd59b04fc3763d23798e89089efb2bf.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "#46A358", marginBottom: "3%" }}
              variant="body2"
            >
              September 12 I Read in 6 minutes
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Cactus & Succulent Care Tips
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cacti are succulents are easy care plants for any home or patio.
            </Typography>
          </CardContent>
          <Box>
            <Button sx={{ color: "black" }} size="small">
              Learn More
            </Button>
            <IconButton>
              <EastIcon />
            </IconButton>
          </Box>
        </Card>
        <Card
          className="block2__item-card"
          sx={{
            maxWidth: 300,
            backgroundColor: "#FBFBFB",
            boxShadow: "none",
          }}
        >
          <CardMedia
            className="imgOfBlock2"
            sx={{ height: 195 }}
            image="https://i.pinimg.com/564x/54/a5/4f/54a54f5f6a529436062f5b8e1cfb0942.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "#46A358", marginBottom: "3%" }}
              variant="body2"
            >
              September 13 I Read in 3 minutes
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Top 10 Succulents for Your Home
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Best in hanging baskets. Prefers medium to high light.
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="small">
              Learn More
            </Button>
            <IconButton>
              <EastIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          className="block2__item-card"
          sx={{
            maxWidth: 300,
            backgroundColor: "#FBFBFB",
            boxShadow: "none",
          }}
        >
          <CardMedia
            className="imgOfBlock2"
            sx={{ height: 195 }}
            image="https://i.pinimg.com/564x/96/d9/eb/96d9ebb0f4b311ae4e200afaa095e87b.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "#46A358", marginBottom: "3%" }}
              variant="body2"
            >
              September 12 I Read in 6 minutes
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Cacti & Succulent Care Tips lkjkjjkl
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cacti and succulents thrive in containers and because most are..
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="small">
              Learn More
            </Button>
            <IconButton>
              <EastIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card
          className="block2__item-card"
          sx={{
            maxWidth: 300,
            backgroundColor: "#FBFBFB",
            boxShadow: "none",
          }}
        >
          <CardMedia
            className="imgOfBlock2"
            sx={{ height: 195 }}
            image="https://i.pinimg.com/564x/8d/d3/cb/8dd3cbca19459edd5913236cb2ec5061.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "#46A358", marginBottom: "3%" }}
              variant="body2"
            >
              September 15 I Read in 2 minutes
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Best Houseplants Room by Room
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The benefits of houseplants are endless. In addition to..
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "black" }} size="small">
              Learn More
            </Button>
            <IconButton>
              <EastIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
