import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from 'lucide-react';

const ProductPricing = () => {
  return (
    <>
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
    </>
  )
}

export default ProductPricing