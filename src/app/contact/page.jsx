import { Footer, HeaderBanner } from "@/components";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { classCard } from "@/Content/info";

const Contact = () => {
  return (
    <>
      <HeaderBanner title="Contact Us" />
      <section className="px-7 py-28 lg:px-24 flex flex-col xl:flex-row gap-10 justify-center ">
        <div className=" flex-1">
          <h2 className=" text-4xl font-bold leading-12">
            We are here for help you! To Shape Your Body.
          </h2>
          <p className="text-md w-[95%] text-secondary font-medium my-8">
            At FlexFit, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col relative">
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <span className="bg-primary w-[50px] h-[4px] absolute top-8"></span>
              <p className="text-md font-medium text-secondary">
                85 Briston Mint Street, London, E1 8LG, USA
              </p>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <span className="bg-primary w-[50px] h-[4px] absolute top-8"></span>
              <div className="text-[15px] font-medium text-secondary">
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
                <p>Mon to Fri: 7:30 am — 1:00 am</p>
              </div>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <span className="bg-primary w-[50px] h-[4px] absolute top-8"></span>
              <div className="text-md font-medium text-secondary">
                <p>01910000000</p>
                <p>flexfit@flexmail.com</p>
              </div>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-xl font-bold mb-4">Follow Us On</h3>
              <span className="bg-primary w-[50px] h-[4px] absolute top-8"></span>
              <div className=" flex items-center justify-start mt-2 gap-3 text-xl text-gray-500 font-semibold">
                <BiLogoFacebook className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-1" />
                <BiLogoTwitter className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
                <BiLogoInstagram className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
                <AiOutlineMail className=" bg-secondary opacity-50 text-4xl hover:bg-primary hover:opacity-100 cursor-pointer rounded-full text-white p-2" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <form className=" w-full flex flex-col px-2 py-4 lg:px-6 lg:py-10 bg-[#f8f8f8] relative">
            <h3 className="text-2xl font-bold mb-14 relative before:bg-primary before:w-[60px] before:h-1 before:absolute before:bottom-[-10px] before:left-0">
              Leave Us Your Info
            </h3>
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
            />
            <input
              type="text"
              placeholder="Email Address *"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
            />
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4">
              <option value="">Select Class</option>
              {classCard.map((item, index) => (
                <option value={item.title} key={index}>
                  {item.title}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Comment"
              cols="30"
              rows="10"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
            ></textarea>
            <button className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6">
              Submit Now
            </button>
          </form>
        </div>
      </section>
      <hr className=" mx-7 lg:mx-24" />
      <Footer />
    </>
  );
};

export default Contact;
