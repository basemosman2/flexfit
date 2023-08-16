import Title from "@/UI/Title";
import { ClassCard } from "@/components";

const FeatureSection = () => {
  return (
    <section className=" px-7 py-16 lg:py-20 lg:px-24 text-center">
      <Title className=" text-start">our feature class</Title>
      <h2 className="text-4xl font-bold leading-tight mb-10  md:w-full">
        We Are Offering Best Flexible Classes
      </h2>
      <ClassCard />
    </section>
  );
};

export default FeatureSection;
