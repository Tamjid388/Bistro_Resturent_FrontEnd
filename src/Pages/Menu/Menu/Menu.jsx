import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cover } from '../../../Component/Cover/Cover'
import menuImg from "../../../assets/menu/banner3.jpg"
import DessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import { Popularmenu } from '../../Home/Popularmenu'
import { useMenu } from '../../../Hooks/useMenu'
import { Sectiontitle } from '../../../Component/SectionTitle/Sectiontitle'
import { MenuCategory } from '../MenuCategory/MenuCategory'

export const Menu = () => {
    const [menu]=useMenu()
    console.log(menu);

    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const offered = menu.filter(item => item.category === "offered");
    
   
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
      
       <Cover
       img={menuImg}
       title={"OUR MENU"}
       subTitle={"Would you like to try a dish?"}
     
       ></Cover>
       <Sectiontitle
       heading={"TODAY'S OFFER"}
       subheading={"---Don't miss---"}
       ></Sectiontitle>
      <MenuCategory
      items={offered}
      ></MenuCategory>

      {/* Desert Menu*/}
      <MenuCategory
      coverImage={DessertImg}
      title={"DESSERTS"}
      subtitle="Indulge in our irresistible desserts,
       each crafted with the finest 
      ingredients and a touch of sweetness to satisfy every craving."
       items={dessert}
      ></MenuCategory>
     
      {/* pizza Menu*/}
      <MenuCategory
      coverImage={pizzaImg}
      title={"Pizza"}
      subtitle="Savor the rich flavors of our hand-crafted pizzas, with a variety of toppings and a 
      crispy, golden crust that will leave you craving more"
       items={pizza}
      ></MenuCategory>
      {/* pizza Menu*/}
      <MenuCategory
      coverImage={saladImg}
      title={"Salad"}
      subtitle="Experience the freshness of our vibrant salads, bursting with crisp
       vegetables, flavorful dressings, and wholesome ingredients."
       items={salad}
      ></MenuCategory>
      {/* pizza Menu*/}
      <MenuCategory
      coverImage={soupImg}
      title={"Soup"}
      subtitle="Warm up with our hearty, comforting soups, made with
       fresh ingredients and rich, flavorful broths to soothe your soul."
       items={soup}
      ></MenuCategory>
     
     
    </div>
  )
}
