import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../Providers/AuthProvider"
import Swal from "sweetalert2"


export const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  const handlelogout=()=>{
    logout()
    .then(()=>{
      console.log("Logged out");
      Swal.fire({
        title: "Logged out!",
        icon: "success",
        draggable: true
      });
    })
    .catch((eror)=>{
      console.log("LogOut Failed",eror);
    })
  }
    const navOptions=
    <>
    <li><NavLink className={'mx-1'} to={'/'}> Home</NavLink></li>
    <li><NavLink className={'mx-1'} to={'/menu'}>Menu</NavLink></li>
    <li><NavLink className={'mx-1'} to={'/order/salad'}>Order</NavLink></li>
    
     {
      user ? 
      <>
      <button className="btn btn-ghost" onClick={handlelogout}>Logout</button>
      </>
      :
      <>

      <li><NavLink className={'mx-1'} to={'/login'}>Login</NavLink></li>
      </>

     }


    </>
  return (
  
    <div>
        <div className="navbar fixed z-10 bg-black/30 text-white max-w-screen-xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navOptions}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Bistro Boss</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navOptions}
      </ul>
    </div>
    <div className="navbar-end">
   <span>{user?.displayName}</span>
    </div>
  </div></div>
  )
}
