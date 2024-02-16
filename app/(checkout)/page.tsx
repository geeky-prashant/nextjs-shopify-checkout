import Footer from "./_components/footer";
import Contact from "./(sections)/contact";
import Delivery from "./(sections)/delivery";
import ProductInfo from "./(sections)/product-info";
import AddressFields from "./(sections)/address-fields";
import DiscountInput from "./(sections)/discount-input";
import ProductPricing from "./(sections)/product-pricing";
import ExpressCheckout from "./(sections)/express-checkout";

const Checkout = () => {
  return (
    <div className="bg-white">
      <div className="flex items-start flex-col md:flex-row">
        {/* Left Col  */}
        <div className="bg-white w-1/2 h-full flex justify-end">
          <div className="flex justify-between flex-col max-w-[1280px] w-[80%]">
            {/* Top Content  */}
            <div className="w-full py-12 px-12 flex flex-col">

              {/* Express Checkout  */}
              <ExpressCheckout />

              {/* Contact  */}
              <Contact />

              {/* Delivery  */}
              <Delivery />

              {/* Address Fields  */}
              <AddressFields />
            </div>

            {/* Bottom Footer  */}
            <Footer />
          </div>
        </div>

        {/* Right Col  */}
        <div className="bg-[#F5F5F5] absolute right-0 w-1/2 min-h-full">
          <div className="flex items-start justify-start max-w-[1280px] py-12 px-12 w-[65%] gap-5 flex-col">
            {/* Product Info  */}
            <ProductInfo />

            {/* Discount Input  */}
            <DiscountInput />

            {/* Product Pricing  */}
            <ProductPricing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
