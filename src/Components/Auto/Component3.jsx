import React from 'react'

function Component3() {
    return (
        <div className="bg-[#f5f5f5] flex flex-col justify-center items-center py-10 mx-auto gap-20">
              <div className="text-lg text-center p-2">
                <div className="text-lg md:text-3xl font-bold">Commercial Auto insurance coverages </div>
                <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
                Liability insurance provides peace of mind in the event of potentially costly liability 
                <p>situations for all types of businesses and professions.</p>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center p-5 md:pl-40 md:pr-40">
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
                  <div className="text-lg font-semibold md:mb-5">
                  Good record protection
                  </div>
                  <p>
                  Good record protection guarantees your insurance premium won’t increase at renewal as a result of up to two losses of any kind over a 5-year period.
                  </p>
                  <div className="flex justify-end md:mt-[3.5rem]">
                    <img src="/Warehouse/img4.png" alt="farmer" className="h-16" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
                  <div className="text-lg font-semibold md:mb-5">
                  Roadside assistance
                  </div>
                  <p>
                  Roadside assistance entitles your business to four service calls per year, per covered vehicle of 4,500 kg or less, from these options
                  </p>
                  <div className="flex justify-end md:mt-[4.7rem]">
                    <img src="/Auto/img2.png" alt="farmer" className="h-16" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
                  <div className="text-lg font-semibold mb-5">Replacement cost</div>
                  <p>
                  Roadside assistance entitles your business to four service calls per year, per covered vehicle of 4,500 kg or less, from these options
                  </p>
                  <div className="flex justify-end md:mt-[4.2rem]">
                    <img src="/Auto/img3.png" alt="farmer" className="h-16" />
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4 md:mr-[42.5rem]">
                  <div className="text-lg font-semibold mb-5">Solution Program</div>
                  <p>
                  The Solution Program allows you to insure your company vehicle(s) when you’re not eligible for standard insurance.
                  <p>This commercial auto insurance program applies to the vehicle(s) or the driver(s), not the policy.</p>
                  </p>
                  <div className="flex justify-end md:mt-[1rem]">
                    <img src="/Auto/img5.png" alt="farmer" className="h-16" />
                  </div>
                </div>
              </div>
            </div>
      );
    }

export default Component3