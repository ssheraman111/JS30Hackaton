import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/Pages/AdminPage/AdminPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductContextProvider from "./Context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />

      <Footer />
    </ProductContextProvider>
  );
};

export default App;
