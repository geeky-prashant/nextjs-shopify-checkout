"use client"

import { useState } from 'react';
import { Truck } from 'lucide-react';
import { Store } from 'lucide-react';
import { Label } from "@/components/ui/label";

const Delivery = () => {
  const [selectedValue, setSelectedValue] = useState("ship");

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full flex flex-col gap-3 pt-8">
      <h2 className="text-xl font-bold text-black">Delivery</h2>
      <div className="w-full flex flex-col items-start justify-start bg-white border-[1.5px] border-[#EFEFEF] rounded-md h-full">

        {/* Ship  */}
        <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
          <input
            type="radio"
            id="ship"
            value="ship"
            checked={selectedValue === "ship"}
            onChange={() => handleChange("ship")}
            className={`hidden`}
          />
          <Label htmlFor="ship" className={`cursor-pointer relative flex items-center justify-between w-full border border-transparent rounded-tl-md rounded-tr-md transition-colors h-16 p-4 ${selectedValue === "ship" ? 'border-[1.5px] border-[#2683C2]' : ''}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center ${selectedValue === "ship" ? 'bg-[#2683C2]' : ''}`}>
                {selectedValue === "ship" && <div className="w-1 h-1 border bg-white rounded-full"></div>}
              </div>
              <span className="text-black font-medium text-base">Ship</span>
            </div>
            <Truck
              width={20}
              height={20}
              className={`text-[#9D9D9D] mr-2`}
              style={{ color: selectedValue === "ship" ? '#2683C2' : '#9D9D9D' }}
            />
          </Label>
        </div>

        {/* Pickup  */}
        <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
          <input
            type="radio"
            id="pickup"
            value="pickup"
            checked={selectedValue === "pickup"}
            onChange={() => handleChange("pickup")}
            className={`hidden`}
          />
          <Label htmlFor="pickup" className={`cursor-pointer relative flex items-center justify-between w-full border border-transparent rounded-bl-md rounded-br-md transition-colors h-16 p-4 ${selectedValue === "pickup" ? 'border-[1.5px] border-[#2683C2]' : ''}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center ${selectedValue === "pickup" ? 'bg-[#2683C2]' : ''}`}>
                {selectedValue === "pickup" && <div className="w-1 h-1 border bg-white rounded-full"></div>}
              </div>
              <span className="text-black font-medium text-base">Pick up</span>
            </div>
            <Store
              width={20}
              height={20}
              className={`text-[#9D9D9D] mr-2`}
              style={{ color: selectedValue === "pickup" ? '#2683C2' : '#9D9D9D' }}
            />
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
