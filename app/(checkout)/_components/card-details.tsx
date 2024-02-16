import { Input } from "@/components/ui/input";

const CardDetails = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Card Number */}
      <div className="grid grid-cols-1 gap-3">
        <Input
          type="text"
          placeholder="Card number"
          className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
        />
      </div>

      {/* Expiry Date and Security Code  */}
      <div className="grid grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="Expiration date (MM / YY)"
          className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
        />

        <Input
          type="text"
          placeholder="Security code"
          className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
        />
      </div>

      {/* Name on Card  */}
      <div className="grid grid-cols-1 gap-3">
        <Input
          type="text"
          placeholder="Name on card"
          className="text-sm rounded-md border-[1.5px] border-[#EFEFEF]"
        />
      </div>
    </div>
  );
};

export default CardDetails
