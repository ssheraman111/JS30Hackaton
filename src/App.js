import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/Pages/AdminPage/AdminPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";

import ProductContextProvider from "./Context/ProductContextProvider";
import AuthContextProvider from "./AuthContexProvider";
import CartContextProvider from "./Context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />

          <Footer />
        </ProductContextProvider>
      </AuthContextProvider>
    </CartContextProvider>
  );
};

export default App;
