"use client"

import { Footer, HeaderBanner, WhoWeAre } from "@/components";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { classCard } from "@/Content/info";
import { useState } from "react";

const Classes = () => {
    const defaultCardsNumber = 8;
    const [cardsNumber, setCardsNumber] = useState(defaultCardsNumber);
    const showSomeCards = classCard.slice(0, cardsNumber);

    const handleShowMore = () => {
       cardsNumber === defaultCardsNumber ? setCardsNumber(classCard.length) : setCardsNumber(defaultCardsNumber);
       window.scrollTo({ top: '320', behavior: "smooth" });
    }

  return (
    <>
      <HeaderBanner title="Classes" />
      <section className="px-7 py-10 lg:px-24 bg-[url('/images/background.jpg')] flex flex-col w-full relative z-0 bg-cover bg-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {showSomeCards.map((item) => (
            <div
              key={item.title}
              className="h-[460px] rounded-xl overflow-hidden shadow relative flex flex-col justify-end pb-12 px-8 "
            >
              <Image
                src={item.img}
                alt={item.title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full absolute -z-10 inset-0 object-cover object-center"
              />
              <div className="bg-[#0000004a] w-full h-full absolute inset-0"></div>
              <h1 className="text-3xl text-white relative font-bold mb-4 before:bg-primary before:w-[40px] before:h-1 before:absolute before:bottom-[-12px] before:left-0  ">
                {item.title}
              </h1>
              <div className="text-white flex flex-wrap gap-3 my-4 items-center relative text-md  ">
                <p>
                  <BsPerson className="inline-block font-bold text-xl mr-1" />
                  {item.trainer}
                </p>
                <p>
                  <FiClock className="inline-block font-bold text-xl mr-1" />
                  {item.time}
                </p>
              </div>
              <Link className=" btn-hero mt-4" href="/classes">
                Join Now
                <BsArrowRight className="ml-2 text-primary text-2xl" />
              </Link>
            </div>
          ))}
        </div>
        <button onClick={handleShowMore}  className="text-md w-[200px] mx-auto my-10 text-white bg-slate-600  py-4 font-medium uppercase shadow-2xl mb-14">
         {cardsNumber === defaultCardsNumber ? "Show More" : "Show Less"}
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Classes;
