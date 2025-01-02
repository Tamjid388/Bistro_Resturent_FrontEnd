import { useState } from "react";
import orderIMG from "../../../assets/shop/banner2.jpg"
import { Cover } from "../../../Component/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from "../../../Hooks/useMenu";
import { FoodCard } from "../../../Component/Card/FoodCard";
import { OrderTab } from "../OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const Order = () => {
  const categories = ['salad', 'pizza', 'soups', 'dessert', 'drinks'];
  const {category}=useParams()
  const initialIndex=categories.indexOf(category)

    const [tabIndex,setTabIndex]=useState(initialIndex)
        const [menu]=useMenu()
        const dessert = menu.filter(item => item.category === "dessert");
        const soup = menu.filter(item => item.category === "soup");
        const pizza = menu.filter(item => item.category === "pizza");
        const salad = menu.filter(item => item.category === "salad");
        const drinks = menu.filter(item => item.category === "drinks");
  return (
    <div>
      <Helmet>
                  <title>Bistro Boss | Order</title>
              </Helmet>
        <Cover 
        img={orderIMG}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
        ></Cover>
        
        <Tabs className={"my-16"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className={"my-4 mx-2"}>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  
  </TabList>
  <TabPanel >
{/* <div className="grid md:grid-cols-3 gap-8 mx-2">
{
        salad.map(item=><FoodCard
        key={item._id}
        item={item}
        >

        </FoodCard>)
    }
</div> */}
{/* Using Resuable Component :OrderTab */}
<OrderTab items={salad}></OrderTab>
  
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  
</Tabs>
        
        
    </div>
  )
}
