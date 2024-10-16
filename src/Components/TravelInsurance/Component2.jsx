import React from "react";

function Component2() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[95%] md:w-[90%] gap-20 md:gap-40 pt-20 md:pt-40 pb-20 md:pb-40">
        <div className="text-sm text-center">
          <div className="text-2xl md:text-3xl font-bold">Travel Insurance Coverages</div>
          <p className="text-xs md:text-sm text-gray-600 max-w-[25rem] md:max-w-[33rem] mx-auto mt-4">
            We help Canada's small business owners save time and money by providing a convenient and affordable way to buy business insurance.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap text-xs md:text-base gap-10 justify-center items-center">
          <div className="border-2 border-gray-400 rounded-lg p-5 flex flex-col gap-5 md:h-96 md:gap-10 w-full md:w-1/4">
            <div className="text-xl font-semibold pr-10">Complete Medical Coverage</div>
            <p>
            The top priority is making sure your health is in order. With  Travel Protection, you can have access to quality healthcare during your trip overseas in the event of unexpected medical emergencies.
            </p>
            <div className="flex justify-end">
              <img src="/travel/security.png" alt="farmer" className="h-16 md:h-16" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 flex flex-col gap-5 md:h-96 md:gap-10 w-full md:w-1/4">
            <div className="text-xl font-semibold">Trip Cancellation & Interruptions</div>
            <p>
            Assistance against unexpected trip disruptions can dampen the mood, Insurer Travel Protection offers coverage against unforeseen events.
            </p>
            <div className="flex justify-end">
              <img src="/travel/plane.png" alt="umbrella" className="h-14 md:h-16 md:mt-[3rem]" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 w-full md:w-1/4 md:h-96">
            <div className="text-xl font-semibold">Emergency Evacuations & 
            Repatriation</div>
            <p>
            In situations where transportation is dire, Travel Protection offers provisions for emergency 
            evacuation and repatriation.
            </p>
            <div className="flex justify-end mt-5">
              <img src="/travel/call.png" alt="advisor" className="h-14 md:h-[3.5rem] mt-[6.7rem]" />
            </div>
          </div>

          <div className="border-2 border-gray-400 rounded-lg p-5 w-full md:w-1/4 md:h-96">
            <div className="text-xl font-semibold">Coverage for Personal Belongings</div>
            <p>
            Offers coverage for your belongings with assistance against lost or delayed baggage.
            </p>
            <div className="flex justify-end">
              <img src="/travel/baggage.png" alt="security" className="h-14 md:h-16 mt-5 md:mt-40" />
            </div>
          </div>
          <div className="border-2 border-gray-400 rounded-lg p-5 w-full md:w-1/4 md:h-96 md:mr-96">
            <div className="text-xl font-semibold">Optional Cancel for Any Reason</div>
            <p>
            For added flexibility, our insurers offers optional Cancel for Any Reason coverage, allowing you to cancel your trip for non-traditional reasons.  Exclusive to Premium Plan holders. 
            </p>
            <div className="flex justify-end">
              <img src="/travel/file.png" alt="security" className="h-14 md:h-16 mt-5 md:mt-28" />
            </div>
          </div>
        </div>

        <div className="bg-cyan-400 px-10 py-3 text-white text-lg md:text-xl rounded-full">
          Get Life Insure now!
        </div>
      </div>
    </div>
  );
}

export default Component2;
