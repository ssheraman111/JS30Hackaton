import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { API } from "../helpers/consts";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};
const INIT_STATE = { products: [], productsDetails: {} };

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
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state);
  //!READ start
  const getProducts = async () => {
    const { data } = await axios.get(API);

    dispatch({ type: "GET_PRODUCTS", payload: data });
    console.log(data);
  };
  //!READ end
  // ! create (post request)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };
  // ! create (post request)

  const values = {
    getProducts,
    addProduct,
    products: state.products,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
