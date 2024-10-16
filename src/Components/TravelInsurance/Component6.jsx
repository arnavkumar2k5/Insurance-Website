import React from "react";

function Component6() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20 mt-40 pb-40">
        <div className="text-lg text-center">
          <div className="text-3xl font-bold">Key Benefits</div>
          <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
            We help Canada small business owners save time and money by providing 
            <div>a convenient and affordable way to buy business insurance</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
          <div className="border-2 border-gray-400 rounded-lg p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold mb-5">
            Medical coverage for up to $5,000,000 
            </div>
            <p>
            per person, for up to 30 days, as a result of required medical attention during a trip covered outside their province of residence.
            </p>
            <div className="flex justify-end md:mt-12">
              <img src="/travel/umbrella+.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold mb-5">
            Baggage loss and Damage
            </div>
            <p>
            If your bags are damaged, lost or delayed during your trip,  coverage provided, so that you can continue travelling as planned.
            </p>
            <div className="flex justify-end md:mt-12">
              <img src="/travel/baggage.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold mb-5">
            Trip Interruptions or Cancellations            
            </div>
            <p>
            If your trip is cancelled due to an insured risk, eligible expenses incurred will be covered. This protection can provide financial protection and coverage for unanticipated expenses.
            </p>
            <div className="flex justify-end md:mt-[1.79rem]">
              <img src="/travel/plane.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold mb-12">
            Additional Services
            </div>
            <p>
            Benefit from additional services, available 24/7, wherever you are, through the B-Insure assisted channels
            </p>
            <div className="flex justify-end md:mt-[4.3rem]">
              <img src="/travel/hand.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
