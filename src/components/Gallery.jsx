import Image from "next/image";

const Gallery = () => {
  return (
    <div className=" lg:h-[600px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 gap-2 p-4 md:p-8 lg:p-12 ">
      <Image
        src="/images/gallery1.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className=" max-h-[350px] lg:row-span-2 lg:col-span-2 w-full h-full object-cover"
      />
      <Image
        src="/images/gallery2.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className=" max-h-[350px] lg:col-span-2 w-full h-full object-cover object-center"
      />
      <Image
        src="/images/gallery5.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full max-h-[350px] h-full object-cover lg:col-span-2 lg:row-span-2 "
      />
      <Image
        src="/images/gallery4.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full max-h-[350px] h-full object-cover lg:col-span-1 "
      />
      <Image
        src="/images/gallery3.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="w-full max-h-[300px] h-full object-cover lg:col-span-1 "
      />

      
    </div>
  );
};

export default Gallery;
