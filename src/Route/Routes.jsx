import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/home";

import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Orderfood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login/Login";
import Main from "../Layout/Main";
import SignUp from "../Pages/signUp/signUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // {
      //   path: 'cart',
      //   element: <Cart></Cart>
      // },
      // admin routes
      // {
      //   path: 'users',
      //   element: <AllUsers></AllUsers>
      // }
    ],
  },
]);
