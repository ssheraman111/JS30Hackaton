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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();

  const [mouse, setMouse] = React.useState(false);
  console.log(mouse);
  const navigate = useNavigate();
  return (
    <Card
      onMouseOver={() => setMouse(true)}
      onMouseOut={() => setMouse(false)}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia sx={{ height: 140 }} image={item.picture} title="green iguana">
        {mouse ? (
          <>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/details/${item.id}`)}>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </>
        ) : (
          ""
        )}
      </CardMedia>
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
      <CardActions>
        <IconButton onClick={() => deleteProduct(item.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
      </CardActions>

      {/* <h1 onMouseOver={setMouse("true")}>emir</h1> */}
    </Card>
  );
}
