import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, PAYMENT_LINKS } from "@/constants";

const Checkout = () => {
  return (
    <div className="bg-white">
      <div className="flex items-start flex-col md:flex-row">
        {/* Left Col  */}
        <div className="bg-white w-1/2 h-screen flex justify-end">
          <div className="flex justify-between flex-col max-w-[1280px] w-[80%]">
            {/* Top Content  */}
            <div className="w-full py-6 px-8">
              {/* Express Checkout  */}
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
            </div>

            {/* Bottom Footer  */}
            <div className="border-t w-full">
              <div className="flex items-center gap-4 py-6 px-0 text-[#2683C2]">
                {FOOTER_LINKS.map((data) => (
                  <Link href={data.href} key={data.key} className="underline">
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col  */}
        <div className="bg-[#F5F5F5] w-1/2 h-screen">
          <div className="flex items-start justify-start max-w-[1280px] py-6 px-8 w-[60%]">
            Right
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
