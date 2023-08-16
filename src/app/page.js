import {
  HeroSection,
  AboutSection,
  FeatureSection,
  JoinUsBanner,
  WhyChooseUsSection,
  TrainersSection,
  TestimonialSection,
  GallerySection,
  BmiSection
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <AboutSection />
        <FeatureSection />
        <JoinUsBanner />
        <WhyChooseUsSection />
        <TrainersSection />
        <TestimonialSection />
        <hr className="mx-7 lg:mx-24" />
        <GallerySection />
        <BmiSection />
      </main>
    </>
  );
}
