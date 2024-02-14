import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-[#fff] sticky top-0 z-30 border-b">
      <div
        className="relative flex items-center justify-center mx-auto max-w-[1280px] px-6 lg:px-20 py-6"
      >
        {/* Logo  */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={120} height={45} priority />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar