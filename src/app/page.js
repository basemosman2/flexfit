import { Footer } from "@/components";
import {
  HeroSection,
  AboutSection,
  FeatureSection,
  JoinUsBanner,
  WhyChooseUsSection,
  TrainersSection,
  TestimonialSection,
  GallerySection,
  BmiSection,
  PricingSection,
  BlogsSection,
  ContactBanner,
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
        <PricingSection/>
        <BlogsSection/>
        <ContactBanner/>
        <Footer/>
      </main>
    </>
  );
}
