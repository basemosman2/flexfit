import { classesInfo } from "@/Content/info";
import Image from "next/image";

const ClassCard = () => {
  return (
    <div className=" lg:grid grid-cols-1 lg:grid-cols-4 gap-6 flex flex-col cursor-pointer">
      {classesInfo.map((item, index) => (
        <div className={` overflow-hidden ${index === 0 || index === 5 ? 'col-span-2' : ''}`} key={index}>
          <div className=" relative w-full h-[300px] ">
            <Image
              src={item.img}
              alt="image"
              width={500}
              height={500}
              className=" w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
            />
            <div className=" absolute bottom-2 left-2  max-w-[90%]">
              <p className=" text-white font-semibold text-3xl lg:text-[2vw] text-start mb-2 capitalize">{item.title}</p>
              <p className=" bg-primary p-2 text-white text-md">
                {item.date}
              </p>
            </div>
            <div className=" bg-[#ffffff4d] absolute top-[20%] left-[-150px] rotate-[30deg] w-[250px] max-w-[250px]  h-16 flex justify-end rounded-full">
                <Image src={item.icon} width={50} height={50} className=" w-[16%] rotate-[-30deg] mr-6 object-contain object-center" alt="icon"/> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassCard;
