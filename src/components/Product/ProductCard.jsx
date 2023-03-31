import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProducts } from "../../Context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import pic from "../../images/013.svg";
export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img className="cardImg" src={item.picture} alt="" />
        <p className="name">{item.name}</p>
        <p className="price">{item.price}$</p>

        <CardActions>
          <button onClick={() => deleteProduct(item.id)}>
            <DeleteIcon />
          </button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>
            <EditIcon />
          </button>
        </CardActions>
      </div>
      {/* 
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.picture}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
}
