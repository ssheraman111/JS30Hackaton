import { Shop } from "@mui/icons-material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../components/Pages/AdminPage/AdminPage";
import DetailsPage from "../components/Pages/DetailsPage/DetailsPage";
import EditPage from "../components/Pages/EditPage/EditPage";
import HomePage from "../components/Pages/HomePage/HomePage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Auth from "../components/Auth/Auth";
import { useAuth } from "../Context/AuthContexProvider";
import { ADMIN } from "../helpers/consts";
import Cart from "../components/Cart/Cart";
import VideoAboutUs from "../components/VideoAboutUs/VideoAboutUs";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <Auth />, id: 2 },
    { link: "*", element: <NotFoundPage />, id: 3 },
    { link: "/details/:id", element: <DetailsPage />, id: 4 },
    { link: "/cart", element: <Cart />, id: 5 },
    { link: "/video", element: <VideoAboutUs />, id: 6 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 7 },
    { link: "/edit/:id", element: <EditPage />, id: 8 },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === ADMIN ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
              key={item.id}
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
