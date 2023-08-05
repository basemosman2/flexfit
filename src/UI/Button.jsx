import Link from "next/link"


const Button = ({children, href, style}) => {
  return (
    <Link href={href || '/'} className={`relative mx-auto mt-10  uppercase  flex items-center justify-center font-bold mb-30 text-black bg-white before:border-border-button w-28 h-[3rem] before:absolute before:inset-0 before:translate-x-3 before:-translate-y-3 before:border  before:z-[-1] before:transition before:ease-linear hover:before:translate-x-0 hover:before:translate-y-0`}>
        {children}
    </Link>
  )
}

export default Button;