import { useContext } from "react"
import { useAdmin } from "../Hooks/useAdmin"
import { AuthContext } from "../Providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import { LoadingSpinner } from "../Component/Spinner/LoadingSpinner"


const AdminRoute=({children})=>{
    const {user, loading}=useContext(AuthContext)

    const [isAdmin,isAdminLoading]=useAdmin()
    const location=useLocation()
    if(loading || isAdminLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
}
export default AdminRoute