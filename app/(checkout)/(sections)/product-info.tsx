import Image from "next/image"

const ProductInfo = () => {
  return (
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
  )
}

export default ProductInfo