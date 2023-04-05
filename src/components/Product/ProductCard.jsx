import * as React from "react";
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
import { useAuth } from "../../Context/AuthContexProvider";
import { ADMIN } from "../../helpers/consts";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();

  const [mouse, setMouse] = React.useState(false);

  const navigate = useNavigate();
  const { addProductToCart, checkProductInCard } = useCart();
  const {
    user: { email },
  } = useAuth();
  return (
    <>
      <div className="card__container">
        <div
          className="img__card"
          onMouseOver={() => setMouse(true)}
          onMouseOut={() => setMouse(false)}
        >
          <img className="madia__card_img" src={item.picture} alt="" />

          {mouse ? (
            <div className="img__card_icons">
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
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="forFlex">
          <div className="card__content">
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
              ${item.price}
            </Typography>
          </div>

          {email === ADMIN ? (
            <div className="card__action">
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
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
