

const HeaderBanner = ({title}) => {
  return (
    <section className=" bg-[url('/images/headerBanner.jpg')] bg-cover bg-center w-full bg-no-repeat h-96">
      <h1 className="text-white text-center text-3xl font-bold flex justify-center items-end capitalize pb-5 h-full w-full">{title}</h1>
    </section>
  )
}

export default HeaderBanner