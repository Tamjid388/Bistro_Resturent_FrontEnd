import React from 'react'
import { Menuitem } from '../../../Component/Menuitem/Menuitem'
import { Cover } from '../../../Component/Cover/Cover'
import { Link, useParams } from 'react-router-dom'

export const MenuCategory = ({items,title,coverImage,subtitle}) => {
  const {category}=useParams()
  console.log(category);
  return (
    <div className='py-8 uppercase'>
      { title &&  <Cover
               img={coverImage}
               title={title}
               subTitle={subtitle}
             
               ></Cover>}
           <section className="grid md:grid-cols-2 gap-10 my-12">
                {
                   items.map(item=><Menuitem
                    key={item._id}
                    item={item}
                    >
                      
                    </Menuitem>)
                }
        
              </section>
           <div className="text-center">
           <Link to={`/order/${title}`}
          className="btn btn-outline font-bold px-8 
           text-black border-1 border-b-4 hover:border-b-2
            hover:border-white">ORDER YOUR FAVOURITE FOOD</Link>
           </div>
    </div>
  )
}
