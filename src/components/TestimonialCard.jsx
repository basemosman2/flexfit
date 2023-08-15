"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";




export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "FlexFit Gym has completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive, and the atmosphere is motivating. I've seen remarkable progress in a short time.",
    img: '/images/tm1.jpg',
},
  {
    id: 2,
    name: "Jane Smith",
    img: '/images/tm2.jpg',
    text: "I've been a member of FlexFit for over a year now, and it's been a fantastic experience. The diverse range of classes keeps me engaged, and the staff is always friendly. It's a gym that truly cares about its members' well-being.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    img: '/images/tm3.jpg',
    text: "FlexFit Gym's personal training program has been a game-changer for me. The trainers tailor workouts to my goals and push me beyond my limits. I'm stronger and healthier than ever, thanks to FlexFit.",
  },
];

const TestimonialCard = () => {
  return (
    <div className=" border-8 w-full p-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className=" cursor-pointer">
            <div className=" flex bg-black cursor-pointer">
              <Image
                src={testimonial.img}
                alt="testimonial"
                width={300}
                height={300}
                className=" hidden flex-[.60] lg:block w-[400px] h-[360px] rounded-tr-[150px]"
              />
              <div className=" w-full flex-1 flex flex-col mr-8 gap-3 justify-center bg-black px-6 py-4 text-white text-left">
              <Image
                src="/icons/testimonial-icon.png"
                alt="testimonial"
                width={60}
                height={160}
                className=" mb-4"
              />
                <p className=" lg:w-4/5 lg:text-xl font-thin">{testimonial.text}</p>
                <p className=" font-bold text-2xl mt-4">{testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
