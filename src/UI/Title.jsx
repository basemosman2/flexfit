import React from "react";

const Title = ({ children, classes }) => {
  return (
    <div  className={`${classes} w-full  bg-[url('/images/titlebg.svg')]  bg-no-repeat bg-center text-center text-white text-[1rem] uppercase font-medium mb-6 py-6`}>
      {children}
    </div>
  );
};

export default Title;
