import React from "react";
import { Sectiontitle } from "../../../Component/SectionTitle/Sectiontitle";
import imgFeatured from "../../../assets/home/featured.jpg";
import  "./Featured.css"

export const Featured = () => {
  const today = new Date();
  const year = today.getFullYear();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const date = today.getDate(); // Extract date

  return (
    <div className="featured-bg-image bg-fixed   ">
     <div className="md:pt-10">
     <Sectiontitle
        heading={"FROM OUR MENU"}
        subheading={"---Check it out---"}
      ></Sectiontitle>
     </div>

      <div className="md:flex justify-center items-center py-8 md:pb-20 px-36 ">
        <div>
          <img src={imgFeatured} alt="" />
        </div>
        <div className="md:ml-10 space-y-2 text-white backdrop-blur-md bg-opacity-50 p-4">
          <p className="font-medium tex-xl">
            {currentMonth} {date}, {year}{" "}
          </p>
          <p className="font-semibold text-2xl">WHERE CAN I GET SOME?</p>
          <p className="font-semibold opacity-80">
          Indulge in the finest dishes crafted with fresh ingredients and culinary expertise. Our menu offers
    a delightful selection to satisfy every craving, from classic favorites to unique gourmet creations. 
    Visit us and taste the difference today!
          </p>
          <button className="btn btn-outline font-bold text-white border-1 border-b-4 hover:border-b-2 hover:border-white">Read More</button>
        </div>
      </div>
    </div>
  );
};
