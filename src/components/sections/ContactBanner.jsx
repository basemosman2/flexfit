import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const contactBanner = () => {
  return (
    <section className="px-7 py-14 lg:py-16 lg:px-24 bg-[url('/images/contactBannerBg.jpg')] relative z-0 bg-cover bg-center">
      <div className=" text-white">
        <h2 className=" text-4xl font-bold">Need a Fitness Trainer?</h2>
        <h3 className=" text-3xl font-bold mb-10">
          <span className="text-primary">Call:</span> +123-456789
        </h3>
        <Link
            href="/contact"
            className=" relative  uppercase  flex items-center justify-center text-white font-bold bg-primary w-52 h-14 before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border before:border-[#ff03353b] before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0 "
          >
            Purchase Now
            <BsArrowRight className="ml-2 text-white text-2xl" />
          </Link>
      </div>
    </section>
  );
};

export default contactBanner;
