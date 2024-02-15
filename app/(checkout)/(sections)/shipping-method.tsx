const ShippingMethod = () => {
  return (
    <div className="w-full flex flex-col gap-3 py-8">
      <h2 className="text-lg font-bold text-black">Shipping method</h2>
      <div className="flex items-center justify-between p-4 bg-[#F2F7FF] border-[1.5px] border-[#2683C2] rounded-md h-16">
        <h3 className="text-black font-medium text-base">Flat Rate Shipping</h3>
        <h4 className="text-black font-medium text-base">Free</h4>
      </div>
    </div>
  )
}

export default ShippingMethod