import Title from "@/UI/Title";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const blogCardInfo = [
  {
    date: "22.04.2023",
    title: "Yoga For Everyone in 2023",
    text: "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.",
  },
  {
    date: "13.06.2023",
    title: "Getting Back Into CrossFit After Vacation",
    text: "Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.",
  },
  {
    date: "28.07.2023",
    title: "Meet Fitness Ambassador Grace",
    text: "Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.",
  },
];

const BlogsSection = () => {
  return (
    <section className="px-7 py-16 lg:py-20 lg:px-24">
      <Title className="">PRICING CHART</Title>
      <h2 className="text-4xl font-bold leading-tight mb-3  md:w-full text-center">
        Exclusive Pricing Plan
      </h2>
      <p className="text-md text-secondary font-medium md:w-2/5 text-center mx-auto">
        FlexFit an unknown printer took a galley of type and scrambled make a
        type specimen book.
      </p>
      <div className="flex flex-wrap w-full h-full lg:flex-row gap-4 justify-center items-center mt-10 ">
        {blogCardInfo.map((blog, index) => (
          <div
            key={index}
            className=" bg-white shadow-lg w-[400px] h-[400px] p-6 flex flex-col gap-5"
          >
            <p className=" border border-black w-fit px-2 py-1 font-bold rounded-full">
              {blog.date}
            </p>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className=" text-md text-secondary">{blog.text}</p>
            <Link
              href="/blogs"
              className="flex justify-center items-center lg:w-1/2 bg-primary text-md uppercase font-bold text-white px-5 py-3 rounded-sm"
            >
              Read More
              <BsArrowRight className="ml-2 text-white text-2xl" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
