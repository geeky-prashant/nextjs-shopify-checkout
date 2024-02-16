"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import CardDetails from '../_components/card-details';

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState("creditcard");

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full flex flex-col gap-3 pb-8">
      <div>
        <h2 className="text-xl font-bold text-black">Payment</h2>
        <h3 className='text-[#9D9D9D] text-sm font-medium mt-1'>All transactions are secure and encrypted.</h3>
      </div>
      <div className="w-full flex flex-col items-start justify-start bg-white border-[1.5px] border-[#EFEFEF] rounded-md h-full">

        {/* Credit Card  */}
        <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
          <input
            type="radio"
            id="creditcard"
            value="creditcard"
            checked={selectedValue === "creditcard"}
            onChange={() => handleChange("creditcard")}
            className={`hidden`}
          />
          <Label htmlFor="creditcard" className={`cursor-pointer relative flex items-center justify-between w-full border border-transparent rounded-tl-md rounded-tr-md transition-colors h-16 p-4 ${selectedValue === "creditcard" ? 'border-[1.5px] border-[#2683C2]' : ''}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center ${selectedValue === "creditcard" ? 'bg-[#2683C2]' : ''}`}>
                {selectedValue === "creditcard" && <div className="w-1 h-1 border bg-white rounded-full"></div>}
              </div>
              <span className="text-black font-medium text-base">Credit card</span>
            </div>
            <Image
              src="/credit_card_icon.png"
              alt='Credit Card'
              width={60}
              height={60}
            />
          </Label>
        </div>

        {/* Box to open under Credit Card when active */}
        {selectedValue === "creditcard" && (
          <div className="w-full bg-[#F4F4F4] p-4">
            <CardDetails />
          </div>
        )}

        {/* Paypal  */}
        <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
          <input
            type="radio"
            id="paypal"
            value="paypal"
            checked={selectedValue === "paypal"}
            onChange={() => handleChange("paypal")}
            className={`hidden`}
          />
          <Label htmlFor="paypal" className={`cursor-pointer relative flex items-center justify-between w-full border border-transparent transition-colors h-16 p-4 ${selectedValue === "paypal" ? 'border-[1.5px] border-[#2683C2]' : 'border-t-[1.5px] border-b-[1.5px] border-t-[#EFEFEF] border-b-[#EFEFEF]'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center ${selectedValue === "paypal" ? 'bg-[#2683C2]' : ''}`}>
                {selectedValue === "paypal" && <div className="w-1 h-1 border bg-white rounded-full"></div>}
              </div>
              <span className="text-black font-medium text-base">PayPal</span>
            </div>
            <Image
              src="/paypal_icon.png"
              alt='PayPal'
              width={80}
              height={80}
            />
          </Label>
        </div>

        {/* Buy Now, Pay Later with Sezzle */}
        <div className="w-full flex items-center justify-center bg-white rounded-md h-full">
          <input
            type="radio"
            id="paylater"
            value="paylater"
            checked={selectedValue === "paylater"}
            onChange={() => handleChange("paylater")}
            className={`hidden`}
          />
          <Label htmlFor="paylater" className={`cursor-pointer relative flex items-center justify-between w-full border border-transparent rounded-bl-md rounded-br-md transition-colors h-16 p-4 ${selectedValue === "paylater" ? 'border-[1.5px] border-[#2683C2]' : ''}`}>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center ${selectedValue === "paylater" ? 'bg-[#2683C2]' : ''}`}>
                {selectedValue === "paylater" && <div className="w-1 h-1 border bg-white rounded-full"></div>}
              </div>
              <span className="text-black font-medium text-base">Buy Now, Pay Later with Sezzle</span>
            </div>
            <Image
              src="/sezzle_icon.png"
              alt='Sezzle'
              width={25}
              height={25}
            />
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
