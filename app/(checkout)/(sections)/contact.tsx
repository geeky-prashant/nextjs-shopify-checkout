import Link from "next/link"
import { Input } from "@/components/ui/input"

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-3 pt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Contact</h2>
        <div className="flex items-center gap-2">
          <h3 className="text-[#9D9D9D] text-sm font-medium">Have an account?</h3>
          <Link href="/" className="text-[#2683C2] text-sm font-medium underline">
            Log in
          </Link>
        </div>
      </div>
      <div className="flex items-start flex-col">
        <Input
          type="text"
          placeholder="Email"

        />
      </div>
    </div>
  )
}

export default Contact