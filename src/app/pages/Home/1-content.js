"use client";
import Image from "next/image";
import card1 from "@/app/assets/Home/content1/Rectangle 18.png";
import card2 from "@/app/assets/Home/content1/unsplash_519_90ncAds.png";
import card3 from "@/app/assets/Home/content1/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import card4 from "@/app/assets/Home/content1/unsplash_sELcHR_bGVs.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { delay } from "framer-motion";

const data = [
  { image: card1 },
  { image: card2 },
  { image: card3 },
  { image: card4 },
];

export default function Content1({ motion, list, item }) {


  return (
    <section className="w-full pt-20  pb-10">
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex items-center place-content-center flex-col  "
      >
        <h1 className="font-semibold text-[30px] text-[#020202] lg:w-[725.79px]   pb-4 lg:text-[60px]">
          Explore new worlds with exotic natural scenery
        </h1>
        <p className="font-medium text-[16px] text-[#878787] lg:w-[580px] ">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </motion.div>
      <main className=" mt-5 mx-5  lg:mx-40  xl:mx-48 ">
        <div className="lg:flex justify-between items-center hidden ">
          <motion.button
            initial="left"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="swiper-button-prev shadow-2xl"
          >
            {"<"}
          </motion.button>
          <button
           initial="right"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
           className="swiper-button-next shadow-2xl">{">"}</button>
        </div>

        <Swiper
          spaceBetween={0} // Space between slides (optional)
          breakpoints={{
            // Define breakpoints and corresponding slidesPerView values
            autoplay: {
              delay: 1000,
            },
            640: {
              slidesPerView: 1,
              autoplay: {
                enabled: true,
                delay: 1000,
              }, // Show only one slide on screens less than 640px
            },
            768: {
              slidesPerView: 2,
              autoplay: {
                enabled: true,
                delay: 1000,
              }, // Show two slides on screens between 640px and 768px
            },
            1024: {
              slidesPerView: 2, // Show three slides on screens wider than 1024px
            },
            1200: {
              slidesPerView: 3, // Show three slides on screens wider than 1024px
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          observeParents={true}
          observer={true}
          parallax={true}
          speed={1000}
          loop={true} // Enable continuous loop (optional)
          autoplay={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}

          // Enable pagination dots (optional)
        >
          {data.map((d) => (
            <SwiperSlide key={d.image} className="lg:px-4">
              <Image
                src={d.image}
                alt="Slide Image"
                className="h-[377.72px] w-full rounded-md "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}