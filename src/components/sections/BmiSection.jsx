"use client";
import React, { useState } from "react";

const BmiSection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBMIResult] = useState(null);
  const [health, setHealth] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
        const heightMeters = height / 100;
      const bmi = weight / (heightMeters * heightMeters);
      setBMIResult(bmi.toFixed(2));
      if (bmi < 18.5) {
        setHealth("Underweight");
      }
      if (bmi >= 18.5 && bmi <= 24.9) {
        setHealth("Normal");
      }
      if (bmi >= 25 && bmi <= 29.9) {
        setHealth("Overweight");
      }
      if (bmi >= 30) {
        setHealth("Obesity");
      }
    }
  };

  return (
    <section className=" bg-[url('/images/BmiSectionBg.jpg')] relative w-full z-0 bg-cover bg-right px-7 py-16 lg:py-20 lg:px-24">
      <div className="text-white">
        <h2 className="text-3xl font-bold leading-6 mb-4">
          Let's Calculate Your <span className="text-primary">BMI</span>
        </h2>
        <p className="text-lg md:text-secondary text-white">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
      </div>
      <div className=" w-2/4">
        <form className=" flex w-full gap-4 h-12 mt-10">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-1/2 md:bg-transparent text-md border-2 md:text-white  border-[#ffffff7d] pl-6 bg-white text-black"
            placeholder="Weight / Kg"
            max="999"
            min="1"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-1/2 md:bg-transparent md:text-white text-md border-2 border-[#ffffff7d] pl-6 bg-white text-black"
            placeholder="Height / cm"
            max="999"
            min="1"
          />
        </form>
        <p className="mt-4 gap-3 text-md font-medium flex items-center w-full text-white ">
          <span className="w-1/2">
            Your BMI is: <span className="text-primary">{bmiResult}</span>
          </span>
          <span className="w-1/2">
            Your weight is: <span className="text-primary">{health}</span>
          </span>
        </p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-lg uppercase font-bold mt-8 bg-[#323232] rounded-sm text-white w-36 h-14 transition duration-300 hover:bg-[#FF0336]"
        >
          Calculate
        </button>
      </div>
    </section>
  );
};

export default BmiSection;
