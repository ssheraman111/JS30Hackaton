import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "../helpers/consts";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};
const INIT_STATE = { products: [], productDetails: {}, randomProducts: [] };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "GET_RANDOM_PRODUCTS":
      return { ...state, randomProducts: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!READ start
  const getProducts = async () => {
    const { data } = await axios.get(`${API}/${window.location.search}`);

    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
  //!READ end
  // ! create (post request)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };
  // ! create (post request)
  const getRandomProducts = async () => {
    const { data } = await axios.get(API + "?_limit=3");

    dispatch({ type: "GET_RANDOM_PRODUCTS", payload: data });
  };
  // !delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  // !delete
  //! get product details
  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  };

  //! saveChanges (patch request)

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    getProducts();
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value == "All") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };

  const values = {
    getProducts,
    addProduct,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    getRandomProducts,
    randomProducts: state.randomProducts,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
