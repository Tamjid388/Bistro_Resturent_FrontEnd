import React from 'react'
import bg from "../../assets/home/chef-service.jpg"

export const Section2 = () => {
  return (
    <div className='mb-20 '>
         <figure className='flex justify-center items-center'
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    opacity:'0.9',
    height: '35rem',
  }}
>
  {/* Content */}

  <div className="bg-white  p-12 rounded-md max-w-4xl text-center mx-auto ">
      <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
      <p className="text-lg leading-relaxed">
        Experience the perfect blend of culinary artistry and impeccable service. Bistro Boss is your destination for
        mouthwatering dishes and unforgettable dining moments.
      </p>
    </div>
</figure>
    </div>
  )
}
