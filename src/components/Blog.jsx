"use client"

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { BiSolidLayer } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Blog = ({ blog }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div>
      <Image
        src={blog.image}
        alt={blog.title}
        width="0"
        height="0"
        sizes="100vw"
        className=" w-full "
      />
      <div className=" flex flex-wrap items-center mt-2 text-sm md:text-md text-secondary">
        <BiSolidLayer className="text-primary mr-2" />
        <span>
          By <strong>{blog.author}</strong> |{" "}
        </span>
        <span> {blog.date} | </span>
        <span>{blog.fitnessClass}</span>
      </div>
      <h1 className=" text-2xl md:text-4xl font-bold my-3">{blog.title}</h1>
      <p className=" font-medium text-md text-secondary mb-10">
        {showFullText ? blog.text : blog.text.substring(0, 250)}
        {showFullText ? '' : '...'}
        <span className="ml-2 text-blue-600 cursor-pointer" onClick={()=>{setShowFullText(!showFullText)}}>{showFullText ? 'Read Less' : 'Read More'}</span>
      </p>
      <Link
            href="/contact"
            className=" mb-10 relative  uppercase  flex items-center justify-center text-white font-bold bg-primary w-52 h-14 before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border before:border-[#ff03353b] before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0 mt-6 "
          >
            Purchase Now
            <BsArrowRight className="ml-2 text-white text-2xl" />
          </Link>
    </div>
  );
};

export default Blog;
