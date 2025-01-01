import React, { useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Sectiontitle } from '../../../Component/SectionTitle/Sectiontitle'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


export const Testimonials = () => {
    const [reviews,setRreviews]=useState([])
    useEffect(()=>{
fetch('reviews.json')
.then(res=>res.json())
.then(data=>setRreviews(data))
    },[])
  return (
   <section className='my-20'>
    <Sectiontitle
     heading={"TESTIMONIALS"}
     subheading={"---What Our Clients Say---"}>

    </Sectiontitle>

    <div className='md:my-20 '>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review=>
        <SwiperSlide
        key={review._id}
        >
            <div className='flex flex-col items-center gap-4'>
             <Rating 
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />  
         <p className='text-center px-8'>{review.details}</p>
            <h3 className='text-2xl font-semibold text-orange-400 text-center'>{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
    </div>
   </section>
  )
}
