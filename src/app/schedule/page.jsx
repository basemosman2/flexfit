"use client"

import { Footer, HeaderBanner, ClassesList} from "@/components";
import { gymTimetable } from "@/Content/info";
import React,{ useState } from "react";

const Schedule = () => {

  const [selectedDay, setSelectedDay] = useState("Monday");
  const filterClasses = gymTimetable.filter((item) => item.day === selectedDay)[0].classes;
  
  return (
    <>
       <HeaderBanner title="Schedule by Day" />
       <div className=" px-7 py-14 lg:py-16 lg:px-24 flex flex-col justify-center items-center w-full">
        <div className=" flex flex-wrap items-center justify-center gap-3 w-full mb-8">
          {
            gymTimetable.map((item , index)=>(
              <p key={index} onClick={()=> setSelectedDay(item.day)} className={` ${item.day === selectedDay ? 'bg-primary text-white' : ''} border text-md font-semibold py-2 px-6 cursor-pointer hover:bg-primary hover:text-white rounded-full`}>{item.day}</p>
            ))
          }
        </div>
        <ClassesList classes={filterClasses}/>
       </div>
       <Footer />
    </>
  )
}

export default Schedule;