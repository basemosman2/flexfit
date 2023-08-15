import Image from "next/image";
import {BiLogoFacebook,BiLogoTwitter,BiLogoInstagram } from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import {RiArrowUpSLine} from "react-icons/ri";





const trainerInfo = [
  {
    name: "John Doe",
    img: "/images/trainer1.png",
    job: "Yoga Trainer",
  },
  {
    name: " Jonathan Smith",
    img: "/images/trainer2.png",
    job: "Crossfit Trainer",
  },
  {
    name: "Ana Johnson",
    img: "/images/trainer3.png",
    job: "Yoga Trainer",
  },
];

const TrainerCards = () => {
  return (
    <div className="py-10 flex flex-wrap justify-center gap-12 items-center">
        {
            trainerInfo.map((trainer, index) => (
              <div key={index} className=" relative group cursor-pointer w-full flex flex-col lg:w-[350px] max-w-[350px] ">
                <Image src="/images/trainer-bg.png" alt="bg" width={300} height={300} className=" absolute z-0 w-full h-[400px] lg:h-[380px] "/>
                <Image src={trainer.img} alt="trainer" width={300} height={300} 	 className=" relative z-10 w-[250px] lg:max-h-[360px] grayscale group-hover:grayscale-0 mx-auto "  />
                <div className=" bg-white flex flex-col justify-center items-center w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px] after:bg-primary after:bottom-0 after:h-1 after:left-0 after:mx-auto after:absolute after:right-0 after:transition-all after:duration-500 ease-in-out after:w-11 after:group-hover:w-full ">
                      <Image src="/icons/carve.png" alt="carve" width={112} height={28} className=" absolute z-10 w-1/2 h-[28px]  top-[-24px]"/>
                      <RiArrowUpSLine className=" absolute z-10 text-3xl top-[-18px]" />
                      <h2 className="font-bold text-3xl">{trainer.name}</h2>
                      <p className="text-lg text-secondary font-medium">{trainer.job}</p>
                      <div className=" flex items-center justify-center mt-2 gap-3 text-xl text-gray-500 font-semibold">
                        <BiLogoFacebook/>
                        <BiLogoTwitter/>
                        <BiLogoInstagram/>
                        <AiOutlineMail/>
                      </div>
                </div>
              </div>
            ))
        }
    </div>
  )
}

export default TrainerCards;