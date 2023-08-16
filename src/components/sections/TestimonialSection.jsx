import Title from "@/UI/Title";
import { TestimonialCard } from "@/components";
import Image from "next/image";
import { testimonialsIcons } from "@/Content/info";

const TestimonialSection = () => {
  return (
    <section className="  px-7 py-16 lg:py-20 lg:px-24">
      <div className=" relative flex flex-col justify-center items-center text-center py-10">
        <Title>testimonials</Title>
        <h2 className=" text-2xl lg:text-5xl font-bold mb-8 mx-auto">
          What Our Clients Say
        </h2>
        <TestimonialCard />
      </div>
      <div className=" mt-8 flex flex-row flex-wrap justify-center items-center gap-3">
        {testimonialsIcons.map((icon, index) => (
          <Image key={index} src={icon} alt="icons" width={200} height={200} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
