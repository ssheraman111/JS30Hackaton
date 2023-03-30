import React from "react";
import AdminPage from "./components/Pages/AdminPage/AdminPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductContextProvider from "./Context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <AdminPage />
      <ProductPage />
    </ProductContextProvider>
  );
};

export default App;
