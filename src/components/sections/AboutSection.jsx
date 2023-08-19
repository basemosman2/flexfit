
import { Card, WhoWeAre } from "@/components";
import { aboutCardsInfo} from "@/Content/info";

const AboutSection = () => {
  return (
    <section className=" px-7 pb-28 lg:px-24 bg-[url('/images/background.jpg')] relative z-0 bg-cover bg-center">
      <div className=" flex flex-col items-center justify-center lg:flex-row gap-8 relative -top-16">
        {aboutCardsInfo.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <WhoWeAre/>
    </section>
  );
};

export default AboutSection;
