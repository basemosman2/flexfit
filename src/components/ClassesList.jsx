import Link from "next/link";

const ClassesList = ({ classes }) => {
  return (
    <>
      {classes.map((item) => (
        <div
          key={item.className}
          className=" flex flex-col md:flex-row gap-7 justify-between items-center md:gap-3 bg-[#f2f2f2] w-full my-1 px-10 py-8"
        >
          <p className=" flex-1 flex flex-col gap-1 items-center md:items-start font-bold text-start text-xl">
            <span className=" text-secondary text-sm">Class Name</span>
            <span>{item.className}</span>
          </p>
          <p className="flex-1 flex flex-col justify-center items-center gap-1 font-bold text-xl">
            <span className=" text-secondary text-sm">Time</span>
            <span>{item.time}</span>
          </p>
          <p className="flex-1 flex flex-col justify-center items-center gap-1 font-bold text-xl">
            <span className=" text-secondary text-sm">Trainer</span>
            <span>{item.trainer}</span>
          </p>
          <Link href="/contact" className="ml-24 text-white text-md font-medium bg-[#555] py-3 px-7 rounded-full hover:bg-primary ease-in duration-200  ">
            Join Now
          </Link>
        </div>
      ))}
    </>
  );
};

export default ClassesList;
