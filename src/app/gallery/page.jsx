"use client";
import Image from "next/image";
import { Footer, HeaderBanner } from "@/components";
import React, { useState , useEffect } from "react";
import Pagination from "@/components/Pagination";

const galleryImgs = [
  "/images/gallery-img1.jpeg",
  "/images/gallery-img2.jpeg",
  "/images/gallery-img3.jpg",
  "/images/gallery-img4.jpeg",
  "/images/gallery-img5.jpg",
  "/images/gallery-img6.jpg",
  "/images/gallery-img7.jpg",
  "/images/gallery-img8.jpg",
  "/images/gallery-img9.jpg",
  "/images/gallery-img10.jpg",
  "/images/gallery-img11.jpeg",
  "/images/gallery-img12.jpeg",
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImgs.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = galleryImgs.length / imagesPerPage; // Total number of pages

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
    console.log('ds')
  };

  useEffect(() => {
    window.scrollTo({ top: '320', behavior: "smooth" });
  }, [currentImages]);


  

  return (
    <>
      <HeaderBanner title="Gallery" />
      <div className="container mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20  mx-auto justify-center items-center w-full h-auto"
        >
          {currentImages.map((img, index) => (
            <Image
              key={index}
              width="0"
              height="0"
              sizes="100vw"
              src={img}
              alt="gallery"
              className="w-full h-auto"
            />
          ))}
        </div>

        {/* Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
