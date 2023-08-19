import Title from "@/UI/Title";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const gymPricing = [
  {
    membershipType: "Basic",
    img: "/images/pricing-img1.jpeg",
    price: "£20",
    features: [
      "Access to gym facilities",
      "Cardio equipment usage",
      "Basic fitness classes",
      "Locker room access",
      "24/7 gym access",
    ],
  },
  {
    membershipType: "Premium",
    img: "/images/pricing-img2.jpeg",
    price: "£30",
    features: [
      "Full gym access",
      "Unlimited fitness classes",
      "Personal trainer sessions",
      "Sauna and steam room",
      "Towel service",
      "Nutritional consultation",
    ],
  },
  {
    membershipType: "Family",
    img: "/images/pricing-img3.jpeg",
    price: "£50",
    features: [
      "Access for 2 adults and 2 children",
      "All premium membership features",
      "Family-friendly fitness classes",
      "Kids' play area",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="px-7 py-16 lg:py-20 lg:px-24 bg-[url('/images/background.jpg')] relative z-0 bg-cover bg-center before:bg-[url('/icons/pricingIcon2.png')] before:w-[350px] before:h-[300px] before:left-0 before:top-0 before:bg-no-repeat before:absolute before:-z-10 after:bg-[url('/icons/pricingIcon1.png')] after:w-[350px] after:h-[300px] after:right-0 after:bottom-0 after:bg-no-repeat after:absolute after:-z-10">
      <div className=" flex flex-col items-center justify-center w-full text-center">
        <Title className="">PRICING CHART</Title>
        <h2 className="text-4xl font-bold leading-tight mb-3  md:w-full">
          Exclusive Pricing Plan
        </h2>
        <p className="text-md text-secondary font-medium md:w-2/5 ">
          FlexFit an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
      </div>
      <div className=" flex flex-wrap lg:flex-row justify-center items-center mt-10 gap-10 w-full h-full ">
        {gymPricing.map((item) => (
          <div
            key={item.membershipType}
            className=" relative z-0 shadow-lg group cursor-pointer flex flex-col items-center gap-5 bg-white w-[350px] lg:h-[680px]"
          >
            <div className=" relative w-full">
              <Image
                src={item.img}
                alt={item.membershipType}
                width={300}
                height={300}
                className=" w-full h-full grayscale group-hover:grayscale-0"
              />
              <h2 className=" group-hover:text-primary absolute left-[50%] bottom-0 w-1/2 text-center py-1 text-secondary text-2xl bg-white translate-x-[-50%]">{item.membershipType}</h2>
            </div>
            <p className=" font-extrabold mt-4 text-5xl">{item.price} <small className=" text-secondary text-sm">p/m</small> </p>
            <ul className=" flex flex-col gap-2 text-center">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link
            href="/contact"
            className=" mb-10 relative  uppercase  flex items-center justify-center text-white font-bold bg-primary w-52 h-14 before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border before:border-[#ff03353b] before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0 mt-6 "
          >
            Purchase Now
            <BsArrowRight className="ml-2 text-white text-2xl" />
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
