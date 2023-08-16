import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const JoinUsBanner = () => {
  return (
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
  );
};

export default JoinUsBanner;
