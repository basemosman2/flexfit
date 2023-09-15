import Title from "@/UI/Title";
import { Gallery } from "@/components";

const GallerySection = () => {
  return (
    <section className=" px-7 py-16 lg:py-20 lg:px-24 before:bg-[url('/icons/galleryIcon.png')] before:w-[350px] before:h-full before:right-0 before:bg-no-repeat before:absolute  ">
      <div className=" relative flex flex-col justify-center items-center text-center py-10">
        <Title>FlexFit Gallery</Title>
        <h2 className=" text-2xl lg:text-5xl font-bold mb-8 mx-auto">
          our workplace gallery
        </h2>
        <p className="text-secondary font-medium text-md md:w-3/5">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases company work atmosphere.
        </p>
        <Gallery />
      </div>
    </section>
  );
};

export default GallerySection;
