import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../Pages/Shared/Footer/Footer"
import { Navbar } from "../Pages/Shared/Navbar/Navbar"


export const Mainlayout = () => {
  const location=useLocation()

  const removeNavAndFooter=location.pathname.includes('login') || location.pathname.includes('signUp') 
  return (
    <div>
       { removeNavAndFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
     {removeNavAndFooter ||   <Footer></Footer>}
    </div>
  )
}
