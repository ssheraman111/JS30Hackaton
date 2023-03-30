import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import AdminPage from "./components/Pages/AdminPage/AdminPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductContextProvider from "./Context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
