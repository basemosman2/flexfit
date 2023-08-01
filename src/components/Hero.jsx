import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" bg-[url('/images/hero.jpg')] relative z-0 bg-cover bg-center h-[900px] w-full">
      <div className=" flex flex-col items-center justify-center relative h-full text-center w-full    text-white ">
        <p className=" bg-[url('/images/titlebg.svg')] bg-no-repeat bg-center text-white text-[1rem] text-center uppercase font-medium  mb-8 pt-2 w-1/2">
          find your energy
        </p>
        <h1 className="font-bold w-full text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase mb-[2rem] ">
          make your body <br />
          <span className="font-thin">fit &amp; perfect</span>
        </h1>
        <Link className=" btn-hero" href="/classes">
          our classes
          <BsArrowRight className="ml-2 text-primary text-2xl" />
        </Link>
      </div>
      <div className=" hidden absolute top-[50%] -right-20 md:flex flex-row-reverse items-center -rotate-90">
        <p className=" text-white uppercase  text-2xl font-bold tracking-widest ">
          share
        </p>
        <span className="w-[35px] bg-primary h-[2.5px] mr-6"></span>
        <div className=" text-white gap-2 flex mr-2 text-3xl">
          <AiFillFacebook className=" rotate-90 hover:text-primary cursor-pointer ease-in duration-200 " />
          <AiFillTwitterSquare className=" rotate-90 hover:text-primary cursor-pointer ease-in duration-200 " />
          <AiFillLinkedin className=" rotate-90 hover:text-primary cursor-pointer ease-in duration-200 " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
