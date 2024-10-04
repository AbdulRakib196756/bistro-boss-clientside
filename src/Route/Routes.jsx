import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/home";
import Main from "../Layout/main";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Orderfood/OrderFood/OrderFood";

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
    ],
  },
]);
