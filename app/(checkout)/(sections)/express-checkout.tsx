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
    </div>
  )
}

export default ExpressCheckout