import React from 'react'
import { FoodCard } from '../../Component/Card/FoodCard'

export const OrderTab = ({items}) => {
  return (
    <div>
        <div className="grid md:grid-cols-3 gap-8 mx-2">
    {
            items.map(item=><FoodCard
            key={item._id}
            item={item}
            >
    
            </FoodCard>)
        }
    </div></div>
  )
}
