import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Mainlayout } from "../Layout/Mainlayout";
import { Home } from "../Pages/Home/Home";
import { Menu } from "../Pages/Menu/Menu/Menu";
import { Order } from "../Pages/Order/OrderMain/Order";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/order/:category',
            element:<Order></Order>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);