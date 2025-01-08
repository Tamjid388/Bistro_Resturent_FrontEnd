import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

export const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-4">
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/dashboard/userhome"}
            >
              <FaHome></FaHome>
              <p>User</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/dashboard/reservation"}
            >
              <FaCalendar></FaCalendar>
              <p>Reservation</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/dashboard/cart"}
            >
              <FaShoppingCart></FaShoppingCart>
              <p>Cart</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/dashboard/review"}
            >
              <MdReviews></MdReviews>
              <p>Review</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/dashboard/bookings"}
            >
             <FaList></FaList>
              <p>Bookings</p>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/"}
            >
            <GoHome></GoHome>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/order/salad"}
            >
            <AiFillPhone></AiFillPhone>
              <p>Order</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
