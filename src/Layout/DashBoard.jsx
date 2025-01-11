import React from "react";
import { AiFillPhone } from "react-icons/ai";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaPizzaSlice,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

export const DashBoard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-4 space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className="flex items-center space-x-1 "
                  to={"/dashboard/adminhome"}
                >
                  <FaHome></FaHome>
                  <p>Admin Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center space-x-1 "
                  to={"/dashboard/additems"}
                >
                  <FaUtensils></FaUtensils>
                  <p>Add Items</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center space-x-1 "
                  to={"/dashboard/manageitems"}
                >
                  <FaList></FaList>
                  <p>Manage Items</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center space-x-1 "
                  to={"/dashboard/managebookings"}
                >
                  <FaBook></FaBook>
                  <p>Manage Bookings</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center space-x-1 "
                  to={"/dashboard/allusers"}
                >
                  <FaUsers></FaUsers>
                  <p>All Users</p>
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* Shared NavLinks  */}
          <div className="divider"></div>
          <li>
            <NavLink className="flex items-center space-x-1 " to={"/"}>
              <GoHome></GoHome>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/order/salad"}
            >
              <FaPizzaSlice></FaPizzaSlice>
              <p>Order</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center space-x-1 "
              to={"/order/salad"}
            >
              <LuContact></LuContact>
              <p>Contact</p>
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
