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
import { useCart } from "../../Context/CartContextProvider";
export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();

  const [mouse, setMouse] = React.useState(false);

  const navigate = useNavigate();
  const { addProductToCart, checkProductInCard } = useCart();
  return (
    <div className="card__container">
      <Card
        onMouseOver={() => setMouse(true)}
        onMouseOut={() => setMouse(false)}
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          className="madia__card"
          sx={{ height: 140 }}
          image={item.picture}
          title="green iguana"
        >
          {mouse ? (
            <>
              <IconButton className="btn__favorite">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                className="btn__search"
                onClick={() => navigate(`/details/${item.id}`)}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                className="btn__shop"
                onClick={() => addProductToCart(item)}
              >
                <ShoppingCartIcon
                  color={checkProductInCard(item.id) ? "primary" : ""}
                />
              </IconButton>
            </>
          ) : (
            ""
          )}
        </CardMedia>
        <CardContent className="card__content">
          <Typography
            className="content__name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.name}
          </Typography>
          <Typography
            className="content__price"
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.price}
          </Typography>
          <Typography
            className="content__descr"
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions className="card__action">
          <IconButton
            className="btn__delete"
            onClick={() => deleteProduct(item.id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            className="btn__edit"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            <EditIcon />
          </IconButton>
        </CardActions>

        {/* <h1 onMouseOver={setMouse("true")}>emir</h1> */}
      </Card>
    </div>
  );
}
