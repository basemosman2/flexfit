
import Title from "@/UI/Title";
import Image from "next/image";
import Link from "next/link";
import { aboutIcons } from "@/Content/info";
import { BsArrowRight } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className=" flex py-14">
      <div className=" flex flex-col text-center lg:text-start items-center lg:items-start flex-1">
        <Title className=" text-start">Who We Are</Title>
        <h2 className="text-4xl font-bold leading-tight mb-6  md:w-full">
          Take Your Health And Body To Next Level
        </h2>
        <p className="text-md text-secondary font-medium md:w-[90%] ">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className=" flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-4 mt-12">
          {aboutIcons.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 1 &&
                " border-none sm:border-solid border-l border-[rgb(0,0,0,0.2)] border-r "
              }`}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={60}
                height={60}
                className="mx-auto"
              />
              <h3 className=" text-md font-bold w-2/3 mx-auto text-center mt-3">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
        <Link
          href="/classes"
          className=" relative uppercase  flex items-center justify-center text-white font-bold bg-[#3f3f3f] w-[11rem] h-[3rem] before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border before:border-border-button before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0 mt-24 "
        >
          Take A Tour
          <BsArrowRight className="ml-2 text-white text-2xl" />
        </Link>
      </div>
      <div className=" hidden lg:block relative flex-[.80]">
        <Image
          src="/images/girl.png"
          alt="girl"
          width={500}
          height={500}
          className=" absolute -translate-y-[50%] top-[50%] right-0  z-50"
        />
        <Image
          src="/images/redbg.svg"
          alt="redBg"
          width={300}
          height={300}
          className=" absolute  top-[55%] right-[13%] -translate-y-[50%] h-auto w-[51%]"
        />
        <Image
          src="/images/air.png"
          alt="redBg"
          width={100}
          height={100}
          className=" absolute  top-[55%] right-[23%] -translate-y-[50%] h-auto w-[20%]"
        />
        <Image
          src="/images/runText.png"
          alt="redBg"
          width={100}
          height={100}
          className=" absolute  top-[55%] left-[8%] -translate-y-[50%] h-auto w-[17%]"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
