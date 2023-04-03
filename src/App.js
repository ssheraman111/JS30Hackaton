import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";

import ProductContextProvider from "./Context/ProductContextProvider";

import CartContextProvider from "./Context/CartContextProvider";
import AuthContextProvider from "./Context/AuthContexProvider";

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
