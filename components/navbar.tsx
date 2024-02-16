import Link from "next/link"
import Image from "next/image"
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] sticky top-0 z-30 border-b w-full">
      <div
        className="relative flex items-center justify-center mx-auto max-w-[1040px] px-6 lg:px-20 py-6 w-full"
      >
        {/* Logo  */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={120} height={45} priority />
        </Link>

        {/* Cart  */}
        <Link href="/" className="absolute left-5 md:left-0">
          <HiOutlineShoppingBag
            className="text-[#2683C2] text-xl"
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar