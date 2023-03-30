import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

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
