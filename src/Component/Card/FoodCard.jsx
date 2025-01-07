import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


export const FoodCard = ({item}) => {
    const {name, image, category, price, _id,recipe } = item
    const {user}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const [cart,refetch]=useCart()

    const axiossecure=useAxiosSecure()
    const handleAddToCart=(food)=>{
     if(user && user.email){
    const cartItem={
      menuId:_id,
      email:user.email,
      name,
      image,
      price
    }
    axiossecure.post(`/cart`,cartItem)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          title: `${cartItem.name} added to cart`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        refetch()

      }

     
    })
    .catch(error=>console.log(error))


     }else{
      Swal.fire({
        title: "Please log in to add items to your cart",
        text: "You need to be logged in to perform this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Log In"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate("/login",{state:{from:location}})
        }
      });
      

     }
    }
  return (
    <div> 
               <div className="card  card-compact bg-base-100  shadow-xl h-full rounded-none">
          <figure>
            <img
              src={image}
              alt="dish" />
          </figure>
          <div className="card-body ">
            <div className=" flex flex-col justify-center items-center gap-2 mb-2">
            <h2 className="card-title  ">{name}</h2>
            <h2 className="card-title text-white bg-black mr-4 p-1 absolute right-0 top-0 ">${price}</h2>
            <p className='text-center font-medium opacity-80  '>{recipe}</p>
            </div>
           
            <div className="card-actions justify-center">
              <button 
              onClick={()=>handleAddToCart(item)}
              className="uppercase btn
               text-yellow-600 border-b-4 hover:bg-black
                border-b-yellow-600 bg-[#E8E8E8]">add to cart</button>
            </div>
          </div>
        </div>   
    </div>
  )
}
