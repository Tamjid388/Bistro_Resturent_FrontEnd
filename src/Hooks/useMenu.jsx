import { useEffect, useState } from "react"


export const useMenu = () => {
  const [menu,setmenu]=useState([])
  const [loading,setLoading]=useState(true)
     useEffect(()=>{
 fetch("http://localhost:5000/menu")
 .then(res=>res.json())
 .then(data=>{
     
     setmenu(data)
     setLoading(false)
 })
     },[])
     return [menu,loading]
}
