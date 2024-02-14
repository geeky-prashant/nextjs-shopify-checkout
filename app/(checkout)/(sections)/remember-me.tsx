import { Checkbox } from "@/components/ui/checkbox"

const RememberMe = () => {
  return (
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
  )
}

export default RememberMe