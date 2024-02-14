
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import DiscountInput from "./(sections)/discount-input";
import { Button } from "@/components/ui/button";
import Footer from "./_components/footer";
import ExpressCheckout from "./(sections)/express-checkout";
import ShippingMethod from "./(sections)/shipping-method";

const Checkout = () => {
  return (
    <div className="bg-white">
      <div className="flex items-start flex-col md:flex-row">
        {/* Left Col  */}
        <div className="bg-white w-1/2 h-screen flex justify-end">
          <div className="flex justify-between flex-col max-w-[1280px] w-[80%]">
            {/* Top Content  */}
            <div className="w-full py-12 px-12 flex flex-col">

              {/* Express Checkout  */}
              <ExpressCheckout />

              {/* Shipping Method  */}
              <ShippingMethod />

              {/* Remember Me  */}
              <div className="w-full flex flex-col gap-3 pb-8">
                <h2 className="text-md font-bold text-black">Remember me</h2>
                <div className="flex items-center space-x-2 p-4 bg-white border-[1.5px] border-[#EFEFEF] rounded-md h-16">
                  <Checkbox
                    id="info"
                  />
                  <label
                    htmlFor="info"
                    className="text-black font-medium text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Save my information for a faster checkout
                  </label>
                </div>
              </div>

              {/* Pay Button  */}
              <Button
                className="bg-[#127CBE] hover:bg-[#0f5b8a] h-16 text-lg text-white font-semibold"
              >Pay now</Button>
            </div>

            {/* Bottom Footer  */}
            <Footer />
          </div>
        </div>

        {/* Right Col  */}
        <div className="bg-[#F5F5F5] w-1/2 h-screen">
          <div className="flex items-start justify-start max-w-[1280px] py-12 px-12 w-[65%] gap-5 flex-col">
            {/* Product Info  */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex items-center justify-center bg-white border rounded-sm">
                  <Image src="/jordan.png" alt="productImg" width={60} height={10} priority />
                  <span className="absolute -top-2 -right-2 bg-[#666666] text-white font-medium text-sm rounded-full w-6 h-6 flex items-center justify-center">1</span>
                </div>
                <div>
                  <h2 className="text-black text-md font-medium">Air Jordan 1 Mid SE Craftn</h2>
                  <h3 className="text-[#666] text-sm font-normal">Green / Size: 7</h3>
                </div>
              </div>
              <div>
                <h2 className="text-[#666] text-sm font-normal text-right line-through">$250.00</h2>
                <h3 className="text-black text-md font-medium text-right">$120.00</h3>
              </div>
            </div>

            {/* Discount Input  */}
            <DiscountInput />

            {/* Product Pricing  */}
            <div className="w-full flex flex-col gap-3 mt-2">

              {/* Subtotal  */}
              <div className="flex items-center justify-between">
                <h2 className="text-black text-md font-normal text-right">Subtotal</h2>
                <h3 className="text-black text-md font-semibold text-right">$120.00</h3>
              </div>

              {/* Shipping  */}
              <div className="flex items-center justify-between">
                <h2 className="text-black text-md font-normal text-right">Shipping</h2>
                <h3 className="text-black text-md font-medium text-right">Free</h3>
              </div>

              {/* Estimated taxes */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-black text-md font-normal text-right">Estimated taxes</h2>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle
                          color="#666"
                          width={15}
                          height={15}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="w-44 h-full p-3 bg-black text-white font-medium text-sm text-center">
                        <p>
                          The final tax and total will be confirmed by email or text after you place your order.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                </div>
                <h3 className="text-black text-md font-semibold text-right">$5.00</h3>
              </div>

              {/* Total  */}
              <div className="flex items-center justify-between">
                <h2 className="text-black text-lg font-semibold text-right">Total</h2>
                <h3 className="text-black text-lg font-semibold text-right">$125.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
