import React from 'react'
import { Sectiontitle } from '../../../Component/SectionTitle/Sectiontitle'
import img from "../../../assets/home/slide1.jpg"

export const CheifRecommendation = () => {
    const dishes = [
        {
          id: 1,
          name: "Caesar Salad",
          description: "A classic salad with fresh romaine lettuce, parmesan cheese, crispy croutons, and Caesar dressing.",
        },
        {
          id: 2,
          name: "Greek Salad",
          description: "A vibrant salad with fresh cucumbers, tomatoes, onions, olives, and feta cheese, dressed in olive oil.",
        },
        {
          id: 3,
          name: "Garden Salad",
          description: "A healthy mix of fresh greens, cherry tomatoes, shredded carrots, and a tangy vinaigrette, perfect for every meal.",
        },
      ];
      
  return (
    <div className='mb-16'>
        <Sectiontitle
         heading="CHEF RECOMMENDS"
         subheading="---Should Try---"
        >
             {/* <img src={img} alt="" /> */}

        </Sectiontitle>
        <section className='grid md:grid-cols-3 gap-6'>
        {  dishes.map(dish=>
        <div key={dish.id}>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={img}
      alt="dish" />
  </figure>
  <div className="card-body ">
    <div className=" flex flex-col justify-center items-center gap-2 mb-2">
    <h2 className="card-title  ">{dish.name}</h2>
    <p className='text-center font-medium opacity-80'>{dish. description}</p>
    </div>
   
    <div className="card-actions justify-center">
      <button className="uppercase btn text-yellow-600 border-b-4 hover:bg-black border-b-yellow-600 bg-[#E8E8E8]">add to cart</button>
    </div>
  </div>
</div>
           

        </div>)}
            

        </section>
    </div>
  )
}
