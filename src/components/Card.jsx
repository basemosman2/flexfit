import React from "react";

const Card = ({ item: { icon, title, subTitle } }) => {
  return (
    <div className=" bg-white  relative flex flex-col items-center justify-center gap-2 px-10 py-8 h-80 shadow-2xl cursor-pointer rounded-tl-[35px] rounded-br-[35px]">
      <div className=" text-6xl text-primary ">{icon}</div>
      <h3 className=" text-2xl font-bold uppercase mb-3">{title}</h3>
      <p className=" text-md leading-6 text-center text-secondary ">{subTitle}</p>
    </div>
  );
};

export default Card;

