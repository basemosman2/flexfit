import { Card, Hero, ClassCard } from "@/components";
import { aboutCardsInfo, aboutIcons, whyUsInfo } from "@/Content/info";
import Title from "@/UI/Title";
import Button from "@/UI/Button";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsFillPlayFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <section className=" px-7 pb-28 lg:px-24 bg-[url('/images/background.jpg')] relative z-0 bg-cover bg-center">
          <div className=" flex flex-col items-center justify-center lg:flex-row gap-8 relative -top-16">
            {aboutCardsInfo.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div className=" flex py-14">
            <div className=" flex flex-col text-center lg:text-start items-center lg:items-start flex-1">
              <Title className=" text-start">Who We Are</Title>
              <h2 className="text-4xl font-bold leading-tight mb-6  md:w-full">
                Take Your Health And Body To Next Level
              </h2>
              <p className="text-md text-secondary font-medium md:w-[90%] ">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
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
        </section>
        <section className=" px-7 py-16 lg:py-20 lg:px-24 text-center">
          <Title className=" text-start">our feature class</Title>
          <h2 className="text-4xl font-bold leading-tight mb-10  md:w-full">
            We Are Offering Best Flexible Classes
          </h2>
          <ClassCard />
        </section>
        <div className=" bg-primary lg:bg-transparent lg:bg-[url('/images/cta-bg.png')] relative z-0 bg-cover  bg-no-repeat w-full lg:h-52 px-4">
          <div className=" container mx-auto lg:mx-0 px-2 lg:px-20 w-full h-full flex lg:flex-row flex-col gap-10 lg:gap-6  py-3 text-left items-center justify-center lg:justify-start ">
            <h2 className=" text-white font-bold text-3xl lg:text-4xl leading-[1.2] text-center lg:text-left lg:w-[65%]">
              We Are Always Providing Best Fitness Service For You
            </h2>
            <Link className=" btn-hero " href="/classes">
              join with us
              <BsArrowRight className="ml-2 text-primary text-2xl" />
            </Link>
          </div>
        </div>
        <section className=" bg-[url('/images/choose-bg.jpg')] relative z-0 bg-cover bg-center px-7 py-16 lg:py-20 lg:px-24">
          <div className="  flex flex-col lg:flex-row justify-center  items-center gap-4">
            <div className=" max-w-[100%] lg:w-full  relative">
              <BsFillPlayFill className=" text-primary absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] text-6xl p-2 cursor-pointer bg-white rounded-full"/>
              <div className=" w-1/2 h-2 bg-primary absolute bottom-[30%] left-[-30%] lg:left-[-16%] rotate-[90deg] "/>
              <div className=" w-3/4 lg:w-3/4 h-2 bg-primary absolute bottom-[50%] right-[-40%] lg:bottom-[50%] lg:right-[-24%] rotate-[84deg] "/>
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
                At <b>FlexFit</b>, we are dedicated to helping you achieve the
                body of your dreams. Our expert trainers and nutritionists will
                work with you to create a personalized fitness and nutrition
                plan that helps you reach your specific goals.
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
        <section className=" bg-[url('/images/teamsBg.png')] relative z-0 bg-cover bg-center px-7 py-16 lg:py-20 lg:px-24 after:bg-[url('/icons/dumble.png')] after:w-full after:object-contain after:absolute after:top-0 after:right-0 after:z-10 ">
              <div className=" flex flex-col justify-center items-center gap-4 py-10">
                <Title>
                  Gym Trainers
                </Title>
                <h2 className="text-5xl font-bold mb-3">Team Of Expert Coaches</h2>
                <p className=" text-secondary font-medium text-md ">Expert team of coaches helps you succeed in any goal,<br/> personalized guidance and motivation provided!</p>
              </div>
        </section>
      </main>
    </>
  );
}
