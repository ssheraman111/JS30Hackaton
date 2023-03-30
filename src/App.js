import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import AdminPage from "./components/Pages/AdminPage/AdminPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <AdminPage />
    </div>
  );
};

export default App;
