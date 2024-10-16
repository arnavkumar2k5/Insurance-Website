import React from "react";

function Component4() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20">
        <div className="text-lg text-center">
          <div className="text-3xl font-bold">Why Choose</div>
          <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
          We help visiting tourists and Canadian individuals save time and money by
            <div> providing a convenient and affordable way to buy travel insurance</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold md:pr-10 md:mb-5">
            Partnered with top tier insurance provider
            </div>
            <p>Purchase yourinsurance anytime, anywhere, with our easy-to-use online platform.</p>
            <div className="flex justify-end md:mt-16">
              <img src="/travel/hotel.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold md:mb-10">
            Benefits and scenarios ensured
            </div>
            <p>
            Compare rates across leading insurance companies to ensure you get the best price on your premium.
            </p>
            <div className="flex justify-end md:mt-16">
              <img src="/travel/arrow.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold mb-10">
            Scope covered
            </div>
            <p> We use data and analytics to identify the rightinsurance policies for your needs.
            </p>
            <div className="flex justify-end md:mt-16">
              <img src="/travel/board.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;