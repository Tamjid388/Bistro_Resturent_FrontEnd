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
import { DashBoard } from "../Layout/DashBoard";
import { Cart } from "../Pages/Dashboard/Cart/Cart";
import { PrivateRoute } from "./PrivateRoute";
import { Allusers } from "../Pages/Dashboard/AllUsers/Allusers";
import { Reservation } from "../Pages/Dashboard/Reservation/Reservation";
import { AddItems } from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

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
          element:
       
          <Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>

        },
        {
          path:"reservation",
          element:<Reservation></Reservation>
        },
        // Admin ROutes
        {
          path:"allusers",
          element:
            <Allusers></Allusers>
         

        },
        {
          path:"additems",
          element:
           <AdminRoute>
             <AddItems></AddItems>
           </AdminRoute>
          

        }
      ]
    }
  ]);