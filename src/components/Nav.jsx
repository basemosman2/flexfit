import { navLinks } from "@/Content/navLinks";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Nav = ({ mobileMenuBar, setMobileMenuBar }) => (
  <nav>
    {/* desktop */}
    <ul className={` hidden xl:flex items-center space-x-6 text-white`}>
      {navLinks.map((item, index) => (
        <Link href={item === "home" ? "/" : `/${item}`} key={index}>
          <li className="cursor-pointer hover:text-primary capitalize">
            {item}
          </li>
        </Link>
      ))}
    </ul>

    {/* mobile */}
    <ul
      className={` fixed z-50 flex flex-col justify-center items-center space-y-6 font-bold w-full h-full bg-white top-0 bottom-0 ${
        mobileMenuBar ? "left-0 right-0" : "-left-full "
      } transition-all ease-linear duration-300`}
    >
      <AiOutlineClose
        className=" absolute top-6 right-6 cursor-pointer text-primary text-3xl"
        onClick={() => setMobileMenuBar(!mobileMenuBar)}
      />
      {navLinks.map((item, index) => (
        <Link href={item === "home" ? "/" : `/${item}`} key={index}>
          <li
            className="cursor-pointer hover:text-primary capitalize"
            onClick={() => setMobileMenuBar(!mobileMenuBar)}
          >
            {item}
          </li>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Nav;
