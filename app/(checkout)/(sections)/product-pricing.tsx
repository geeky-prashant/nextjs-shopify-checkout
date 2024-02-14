import PriceWithTooltip from "../_components/price-with-tooltip";

const ProductPricing = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 mt-2">
        {/* Subtotal */}
        <PriceWithTooltip
          label="Subtotal"
          amount="$120.00"
        />

        {/* Shipping */}
        <PriceWithTooltip
          label="Shipping"
          amount="Free"
        />

        {/* Estimated taxes */}
        <PriceWithTooltip
          label="Estimated taxes"
          amount="$5.00"
          tooltipContent="The final tax and total will be confirmed by email or text after you place your order."
        />

        {/* Total */}
        <div className="flex items-center justify-between">
          <h2 className="text-black text-lg font-semibold text-right">Total</h2>
          <h3 className="text-black text-lg font-semibold text-right">$125.00</h3>
        </div>
      </div>
    </>
  )
}

export default ProductPricing