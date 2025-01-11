import { useQuery } from "@tanstack/react-query"
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure"
import { MdDelete } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import Swal from "sweetalert2"



export const Allusers = () => {
    const axiossecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res=await axiossecure.get("/users"
            // using this on axiosSecure hook
            //     ,{
            //     headers:{
            //         authorization:`Bearer ${localStorage.getItem(`access-token`)}`
            //     }
            // }
        )
            return res.data
        }
    })
    const handleDelete=(user)=>{
                Swal.fire({
                    title: "Do you want to save the changes?",
                    showDenyButton: true,
                  
                    confirmButtonText: "Yes,Delete It",
                  
                  }).then((result) => {
                   
                    if (result.isConfirmed) {
                        axiossecure.delete(`/users/${user._id}`)
                        .then(res=>{
                            if(res.data.deletedCount>0){
                                refetch()
                                Swal.fire({
                                    title: "Deleted Successfylly",
                                    icon: "success",
                                    draggable: true
                                  });
                            }
                        })
                    } 
                  });
       
    }
    const handleAction=(user)=>{
        axiossecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    title:`${user.name} is an Admin Now!`,
                    icon: "success",
                    draggable: true
                  });
            }

        })

       
    }
  return (
    <div >
     <div className="flex justify-evenly my-4 bg-gray-100">
     <h2 className="text-3xl font-bold">All Users</h2>
     <h2 className="text-3xl font-bold">Total Users:{users.length}</h2>
     </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr
      className="">
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,idx)=> <tr key={user._id}>
            <th>{idx+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
           {user.role==="admin"?"Admin": <button onClick={()=>handleAction(user)} className="btn text-xl bg-orange-500">
                   <FaUsers className="text-white"></FaUsers>
                </button>}
            </td>
            <td>
                <button onClick={()=>handleDelete(user)} className="btn text-xl bg-red-500">
                   <MdDelete className="text-white"></MdDelete>
                </button>
            </td>
          </tr>
       )
      }
     
    </tbody>
  </table>
</div>

    </div>
  )
}
