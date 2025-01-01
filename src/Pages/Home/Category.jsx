// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Sectiontitle } from "../../Component/SectionTitle/Sectiontitle";

export const Category = () => {
  return (
  <section>
    <div>
    <Sectiontitle  heading="ORDER ONLINE"
      subheading="---From 11:00am to 10:00pm---">
     

    </Sectiontitle>
    
    </div>
      <Swiper
      slidesPerView={4}
      // centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
          delay: 1000,
          disableOnInteraction: false, // Continue autoplay after interaction
        }}

      modules={[Pagination, Autoplay]}
      className="mySwiper mb-16"
    >
      <SwiperSlide>
        <img src={slide1} alt="Slide 1" />
        <h3 className='text-4xl text-center -mt-16  text-white'>Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="Slide 2" />
        <h3 className='text-4xl text-center -mt-16  text-white'>Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="Slide 3" />
        <h3 className='text-4xl text-center -mt-16  text-white'>Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="Slide 4" />
        <h3 className='text-4xl text-center -mt-16  text-white'>Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="Slide 5" />
        <h3 className='text-4xl text-center -mt-16  text-white'>desserts</h3>
      </SwiperSlide>
    </Swiper>
  </section>
  );
};
