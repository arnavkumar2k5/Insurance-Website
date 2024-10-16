import React from "react";

function Component6() {
  return (
    <div className="bg-white pb-40">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img
              src="/Auto/img10.png"
              alt="family"
              className="h-[50vh] pl-0 md:pl-20"
            />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-10 text-[0.8rem] md:text-[0.9rem]">
            <div className="text-xl md:text-3xl font-semibold text-center md:text-left">
              How much does commercial auto insurance cost?
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
              <div>
              The cost of a commercial auto insurance policy involves several factors, including: 
              </div>
              <ul className="list-disc pl-5">
                <li>
                Your driving record and years of experience behind the wheel
                </li>
                <li>
                The type of vehicle you drive
                </li>
                <li>
                Your age and gender
                </li>
                <li>
                Where you live or where the vehicle is typically parked
                </li>
                <li>
                How many kilometers you drive annually
                </li>
              </ul>
              <div>
              Different insurers offer varying premiums based on these and other factors. That’s why it pays to have a broker shop around on your behalf and find you a policy that suits your needs at an affordable price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
