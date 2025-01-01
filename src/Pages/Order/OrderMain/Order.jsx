import { useState } from "react";
import orderIMG from "../../../assets/shop/banner2.jpg"
import { Cover } from "../../../Component/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from "../../../Hooks/useMenu";
import { FoodCard } from "../../../Component/Card/FoodCard";

export const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
        const [menu]=useMenu()
        const dessert = menu.filter(item => item.category === "dessert");
        const soup = menu.filter(item => item.category === "soup");
        const pizza = menu.filter(item => item.category === "pizza");
        const salad = menu.filter(item => item.category === "salad");
        const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
        <Cover 
        img={orderIMG}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
        ></Cover>
        
        <Tabs className={"my-16"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className={"my-4"}>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  
  </TabList>
  <TabPanel>
<div className="grid md:grid-cols-3 gap-8">
{
        salad.map(item=><FoodCard
        key={item._id}
        item={item}
        >

        </FoodCard>)
    }
</div>
  </TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  
</Tabs>
        
        
    </div>
  )
}
