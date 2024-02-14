import Link from "next/link"
import { FOOTER_LINKS } from "@/constants"

const Footer = () => {
  return (
    <div className="border-t w-full">
      <div className="flex items-center gap-4 py-6 px-6 text-[#2683C2]">
        {FOOTER_LINKS.map((data) => (
          <Link href={data.href} key={data.key} className="underline">
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer