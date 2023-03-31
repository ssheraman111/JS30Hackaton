import { Shop } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../components/Pages/AdminPage/AdminPage";
import DetailsPage from "../components/Pages/DetailsPage/DetailsPage";
import EditPage from "../components/Pages/EditPage/EditPage";
import HomePage from "../components/Pages/HomePage/HomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/admin", element: <AdminPage />, id: 2 },
    { link: "/edit/:id", element: <EditPage />, id: 3 },
    { link: "/details/:id", element: <DetailsPage />, id: 4 },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
