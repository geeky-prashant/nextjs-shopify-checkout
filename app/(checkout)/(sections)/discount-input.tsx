"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DiscountInput = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [buttonColor, setButtonColor] = useState('bg-[#EDEDED] text-[#666666]');

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setDiscountCode(inputValue);
    setButtonColor(inputValue ? 'bg-[#127CBE] text-white' : 'bg-[#EDEDED] text-[#666666]');
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-3">
      <Input
        type="text"
        placeholder="Discount code"
        value={discountCode}
        onChange={handleInputChange}
      />
      <Button
        type="button"
        className={`border border-[#DBDBDB] bg-[#EDEDED] ${buttonColor} hover:bg-[[#EDEDED]]`}
      >
        Apply
      </Button>
    </div>
  )
}

export default DiscountInput