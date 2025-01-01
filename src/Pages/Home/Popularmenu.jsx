import { useEffect, useState } from "react";
import { Sectiontitle } from "../../Component/SectionTitle/Sectiontitle";
import { Menuitem } from "../../Component/Menuitem/Menuitem";

export const Popularmenu = () => {
    const [menu,setmenu]=useState([])
    useEffect(()=>{
fetch("menu.json")
.then(res=>res.json())
.then(data=>{
     const Popularmenu=data.filter(item=>item.category==='popular')
    setmenu(Popularmenu)
})
    },[])
  return (
    <section className="mb-16">
      <Sectiontitle
        heading="FROM OUR MENU"
        subheading="---Check it out---"
      ></Sectiontitle>
      <section className="grid md:grid-cols-2 gap-10">
        {
            menu.map(item=><Menuitem 
            key={item._id}
            item={item}
            >
              
            </Menuitem>)
        }

      </section>
   <div className="flex justify-center my-9">
   <button className="btn btn-outline font-bold  
       border-0 border-b-4 ">
      View Full  Menu</button>
   </div>
    
    </section>
  );
};
