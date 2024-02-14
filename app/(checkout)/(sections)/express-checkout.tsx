import Image from "next/image"
import { PAYMENT_LINKS } from "@/constants"

const ExpressCheckout = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h1 className="text-[#9D9D9D] text-sm">Express Checkout</h1
      >
      <div className="grid grid-cols-3 gap-2 w-full">
        {
          PAYMENT_LINKS.map((data) => (
            <div
              key={data.key}
              style={{ backgroundColor: data.bgColor }}
              className="rounded-sm flex items-center justify-center cursor-pointer"
            >
              <Image src={data.src} alt="logo" width={60} height={10} priority />
            </div>
          ))
        }
      </div>

      {/* OR Divider */}
      <div className="relative border w-full border-[#EFEFEF] text-center mt-5">
        <span className="absolute inset-0 m-auto bg-white px-6 flex items-center justify-center w-5 h-5 text-[#A6A6A6] font-semibold text-base">OR</span>
      </div>
    </div>
  )
}

export default ExpressCheckout