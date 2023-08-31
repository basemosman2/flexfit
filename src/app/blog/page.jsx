import Blog from "@/components/Blog";
import { blogsData } from "@/Content/info";
import { Footer, HeaderBanner } from "@/components";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      <HeaderBanner title="Blog" />
      <section className=" px-7 py-14 lg:py-16 lg:px-24 flex flex-col lg:flex-row justify-center ">
        <div className=" w-full md:flex-1">
          {blogsData.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
        <div className=" w-full lg:flex-[0.50] lg:px-10">
          <form className="flex">
            <input
              type="text"
              className="border-solid border-[1px] text-[#444] text-md font-medium h-16 py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
              placeholder="Search..."
            />
            <button>
              <AiOutlineSearch className="bg-primary text-white text-xl h-16 w-16 rounded-br-xl rounded-tr-xl p-3" />
            </button>
          </form>
          <div className="flex flex-col bg-[#f8f8f8] my-9 p-8">
            <p className="text-xl relative font-bold mb-4 before:bg-primary before:w-[40px] before:h-1 before:absolute before:bottom-[-12px] before:left-0  ">
              Categories
            </p>
            <ul className=" mt-6">
              {blogsData.map((blog) => (
                <li
                  key={blog.id}
                  className="cursor-pointer flex gap-1 text-md text-secondary items-center border-b border-[#dcd9d9] py-6 hover:text-primary ease-in duration-200 "
                >
                  <MdOutlineKeyboardArrowRight />
                  {blog.fitnessClass}
                  <span className="flex-1 text-right">({blog.id})</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-[#f8f8f8] my-9 p-8">
            <p className="text-xl relative font-bold mb-4 before:bg-primary before:w-[40px] before:h-1 before:absolute before:bottom-[-12px] before:left-0  ">
              Recent Posts
            </p>
            <ul className=" mt-6">
              {blogsData.map((blog) => (
                <li
                  key={blog.id}
                  className="cursor-pointer flex flex-wrap xl:flex-nowrap   gap-1 text-md text-secondary items-center  py-4 hover:text-primary ease-in duration-200 "
                >
                  <Image
                    width="0"
                    height="0"
                    src={blog.image}
                    alt={blog.title}
                    sizes="100vw"
                    className=" w-32 object-cover mr-2"
                  />
                  <div>
                    <p className="text-md text-secondary font-medium mt-2">
                      {blog.date}
                    </p>
                    <p className="text-[16px] text-black hover:text-primary ease-in duration-200 cursor-pointer font-bold">
                      {blog.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-[#f8f8f8] my-9 p-6">
            <p className="text-xl relative font-bold mb-4 before:bg-primary before:w-[40px] before:h-1 before:absolute before:bottom-[-12px] before:left-0  ">
              Popular Tags
            </p>
            <ul className=" mt-6 flex flex-wrap gap-2 w-full">
              {blogsData.map((blog) => (
                <li key={blog.id} className="">
                    <p className="bg-white w-fit py-2 px-3 hover:text-primary ease-in duration-200 cursor-pointer">#{blog.fitnessClass}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
