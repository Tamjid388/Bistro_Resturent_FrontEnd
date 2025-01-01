import React from 'react'

export const FoodCard = ({item}) => {
    const {name, image, category, price, _id,recipe } = item
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
              className="uppercase btn
               text-yellow-600 border-b-4 hover:bg-black
                border-b-yellow-600 bg-[#E8E8E8]">add to cart</button>
            </div>
          </div>
        </div>   
    </div>
  )
}
