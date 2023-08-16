import Title from "@/UI/Title";
import { TrainerCards } from "@/components";

const TrainersSection = () => {
  return (
    <section className=" bg-[url('/images/teamsBg.png')] relative z-0 bg-cover bg-center px-7 py-16 lg:py-20 lg:px-24 after:bg-[url('/icons/dumble.png')] after:h-[360px] after:bg-no-repeat after:w-[300px] after:object-cover after:absolute after:top-0 after:right-0 after:-z-10 ">
      <div className=" flex flex-col justify-center items-center text-center gap-4 py-10">
        <Title>Gym Trainers</Title>
        <h2 className="text-5xl font-bold mb-3 mx-auto">
          Team Of Expert Coaches
        </h2>
        <p className=" text-secondary font-medium text-md ">
          Expert team of coaches helps you succeed in any goal,
          <br /> personalized guidance and motivation provided!
        </p>
        <TrainerCards />
      </div>
    </section>
  );
};

export default TrainersSection;
