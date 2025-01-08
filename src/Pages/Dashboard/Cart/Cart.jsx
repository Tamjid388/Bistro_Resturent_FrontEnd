import React from 'react'
import useCart from '../../../Hooks/useCart'

export const Cart = () => {
    const [cart]=useCart()
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
  return (
    <div className='bg-gray-200'>
       <div className='flex justify-evenly py-8'>
       <h2 className="text-4xl font-bold">Items: {cart.length}</h2>
       <h2 className="text-4xl font-bold">
       Total Price: {totalPrice}
        </h2>
        <button className='btn px-8'>Pay</button>
       
       </div>
       <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>No</th>
      <th>Image</th>
        <th>Name</th>
       
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            cart.map((item,idx)=> <tr key={idx}>
            <th>
              {idx+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="" />
                  </div>
                </div>
              
              </div>
            </td>
            <td>
           {item.name}
              
            </td>
            <td> ${item.price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
        }
      

     


    </tbody>

  </table>
</div>
    </div>
  )
}
