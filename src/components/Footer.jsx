import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="px-7 py-14 lg:py-16 lg:px-24 w-full ">
      <div className=" w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-10 md:gap-5">
        <div className=" flex flex-[1.4] flex-col gap-4">
          <Link href="/">
            <Image
              src="/images/logoBlack.svg"
              alt="logo"
              width="0"
              height="0"
              className="w-1/2 object-contain"
            />
          </Link>
          <p className="text-md font-medium text-secondary w-3/5">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className=" flex items-center justify-start mt-2 gap-3 text-xl text-gray-500 font-semibold">
            <BiLogoFacebook className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-1" />
            <BiLogoTwitter className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
            <BiLogoInstagram className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
            <AiOutlineMail className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
          </div>
          <p className="text-md font-medium text-secondary">
            Privacy Policy | © 2023 FlexFit <br /> Design by{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.radiustheme.com/"
            >
              RadiusTheme
            </Link>
          </p>
        </div>
        <div className=" flex-1">
            <p className="text-xl relative font-bold mb-4 before:bg-primary before:w-[60px] before:h-1 before:absolute before:bottom-[-5px] before:left-0  ">Our classes</p>
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href="classes" className=" text-md hover:text-primary cursor-pointer text-secondary font-medium ">Fitness Classes</Link>
                
                </li>
                <li>
                    <Link href="classes" className=" text-md hover:text-primary cursor-pointer text-secondary font-medium ">Aerobics Classes</Link>
                
                </li>
                <li>
                    <Link href="classes" className=" text-md hover:text-primary cursor-pointer text-secondary font-medium ">Power Yoga</Link>
                
                </li>
                <li>
                    <Link href="classes" className=" text-md hover:text-primary cursor-pointer text-secondary font-medium ">Learn Machines</Link>
                
                </li>
                <li>
                    <Link href="classes" className=" text-md hover:text-primary cursor-pointer text-secondary font-medium ">Full-body Strength</Link>
                
                </li>
            </ul>
        </div>
        <div className=" flex-1">
            <p className="text-xl relative font-bold mb-4 before:bg-primary before:w-[60px] before:h-1 before:absolute before:bottom-[-5px] before:left-0  ">Working Hours</p>
            <ul className="flex flex-col gap-4">
                <li>
                    <p className="text-md font-bold text-secondary">Monday - Friday</p>
                </li>
                <li>
                    <p className="text-md font-medium text-secondary"> 7:00am - 22:00pm</p>
                </li>
                <li>
                    <p className="text-md font-bold text-secondary"> Saturday - Sunday</p>
                </li>
                <li>
                    <p className="text-md font-medium text-secondary"> 8:00am - 19:00pm</p>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
