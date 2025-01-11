import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import { axiossecure, useAxiosSecure } from "./useAxiosSecure"



export const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiossecure=useAxiosSecure()
    const {data:isAdmin}=useQuery({
        queryKey:[user?.email,"isAdmin"],
        queryFn:async()=>{
            const res=await axiossecure.get(`/users/admin/${email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
return [isAdmin]
}