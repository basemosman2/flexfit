import Title from "@/UI/Title";
import Image from "next/image";
import { BsArrowRight, BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
import { whyUsInfo } from "@/Content/info";

const WhyChooseUs = () => {
  return (
    <section className=" bg-[url('/images/choose-bg.jpg')] relative z-0 bg-cover bg-center px-7 py-16 lg:py-20 lg:px-24">
      <div className="  flex flex-col lg:flex-row justify-center  items-center gap-4">
        <div className=" max-w-[100%] lg:w-full  relative">
          <BsFillPlayFill className=" text-primary absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] text-6xl p-2 cursor-pointer bg-white rounded-full" />
          <div className=" w-1/2 h-2 bg-primary absolute bottom-[30%] left-[-30%] lg:left-[-16%] rotate-[90deg] " />
          <div className=" w-3/4 lg:w-3/4 h-2 bg-primary absolute bottom-[50%] right-[-40%] lg:bottom-[50%] lg:right-[-24%] rotate-[84deg] " />
          <Image
            src="/images/main-img.png"
            alt="choose-bg"
            width={350}
            height={350}
            className=" w-full lg:w-3/4 mx-auto "
          />
        </div>
        <div className=" py-10 w-full flex flex-col justify-center text-center lg:text-left px-4">
          <Title>why choose us</Title>
          <h2 className=" text-3xl text-white font-bold leading-[1.2]">
            We Can Give A Shape Of Your Body Here!
          </h2>
          <p className="text-md text-secondary mt-7 max-w-3xl">
            At <b>FlexFit</b>, we are dedicated to helping you achieve the body
            of your dreams. Our expert trainers and nutritionists will work with
            you to create a personalized fitness and nutrition plan that helps
            you reach your specific goals.
          </p>
          <div className=" flex flex-col md:grid md:grid-cols-2 gap-6 py-10">
            {whyUsInfo.map((item, index) => (
              <div
                key={index}
                className=" flex justify-center lg:justify-start items-center  gap-4 "
              >
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={60}
                  height={60}
                  className=" bg-[#2b2b2b] p-2 hover:bg-primary rounded-full"
                />
                <p className=" text-xl text-white font-medium w-1/2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/classes"
            className=" relative mx-auto lg:mx-0 uppercase  flex items-center justify-center text-white font-bold bg-[#3f3f3f] w-[11rem] h-[3rem] before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border before:border-border-button before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0 mt-14 "
          >
            Our Classes
            <BsArrowRight className="ml-2 text-white text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
