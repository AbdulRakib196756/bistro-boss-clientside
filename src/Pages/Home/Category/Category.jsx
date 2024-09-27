import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import Headers from "../../../components/Headers/headers";

const Category = () => {
  return (
    <>
      <section>
        <Headers
          title={"Order Online"}
          subtitle={"from 11:00am to 10:00pm"}
        ></Headers>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-10"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="uppercase text-white -mt-16 text-4xl text-center shadow-sm ">
              salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="uppercase text-white -mt-16 text-4xl text-center shadow-sm ">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="uppercase text-white -mt-16 text-4xl text-center shadow-sm">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="uppercase text-white -mt-16 text-4xl text-center shadow-sm ">
              dessarts
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
