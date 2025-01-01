import React from 'react'
import { Menuitem } from '../../../Component/Menuitem/Menuitem'
import { Cover } from '../../../Component/Cover/Cover'

export const MenuCategory = ({items,title,coverImage,subtitle}) => {
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
    </div>
  )
}
