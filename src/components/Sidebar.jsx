import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const sideImgs = [
  "/images/sideImg1.jpeg",
  "/images/sideImg2.jpeg",
  "/images/sideImg3.jpeg",
  "/images/sideImg4.jpeg",
  "/images/sideImg5.jpeg",
  "/images/sideImg6.jpeg",
];

const sideContactInfo = [
  {
    icon: <FaLocationArrow className="text-primary text-xl" />,
    text: "123 Main St, New York, NY 10001",
  },
  {
    icon: <FaPhoneAlt className="text-primary text-xl" />,
    text: "0191234567",
  },
  {
    icon: <GrMail className="text-primary text-xl" />,
    text: "info@flexfit.com",
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={` flex flex-col space-y-12 fixed z-50 top-0 w-full h-full overflow-y-scroll sm:w-[400px] bg-white p-10 ${
        isSidebarOpen ? "left-0" : "-left-full "
      } transition-all ease-linear duration-300`}
    >
      <div className=" flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logoBlack.svg"
            alt="logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </Link>
        <AiOutlineClose
          className="cursor-pointer text-primary text-3xl font-bold"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="text-md font-medium text-secondary">
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
      <div className=" flex flex-col gap-6">
        <h1 className=" text-2xl font-bold">Gallery</h1>
        <div className=" grid grid-cols-3 grid-rows-2 gap-4">
          {sideImgs.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="sideImg"
              width={100}
              height={100}
              className="rounded-xl cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-6">
        <h1 className=" text-2xl font-bold">Contact Info</h1>
        <div className=" space-y-2">
          {sideContactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4 cursor-pointer">
              {info.icon}
              <p className="text-md font-medium text-secondary hover:text-primary">
                {info.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className=" text-2xl font-bold">Follow Us</h1>
        <div className=" flex gap-5">
          <Link
            href="/"
            className=" bg-primary w-10 h-10 rounded-full text-2xl grid place-items-center text-white"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="/"
            className=" bg-primary  w-10 h-10 rounded-full text-2xl grid place-items-center text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className=" bg-primary  w-10 h-10 rounded-full text-2xl grid place-items-center text-white"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
