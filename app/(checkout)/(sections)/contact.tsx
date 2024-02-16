import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

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
          className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
        />
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <Checkbox
          id="email"
        />
        <label
          htmlFor="email"
          className="text-black font-medium text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email me with news and offers
        </label>
      </div>
    </div>
  )
}

export default Contact