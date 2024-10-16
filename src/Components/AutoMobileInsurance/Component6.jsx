import React from "react";

function Component6() {
  const items = [
    {
      heading: "How can I get a discount on my car insurance?",
      para: "If you combine your house insurance and automobile insurance policies, you get more for your money. If you own multiple vehicles, it can also help you save! Ask your broker about bundling your home and car insurance policies together.",
    },
    {
      heading: "What vehicles do you insure?",
      para: "We provide insurance policies for cars, motorcycles, RVs (motorhomes, campers, camping trailers, etc.), snowmobiles, ATVs and boats. If you have specific needs, don’t hesitate to reach out to your broker. We might just have the solution for you!",
    },
    {
      heading: "What does full car insurance coverage include?",
      para: "Full car insurance coverage often refers to an All Perils coverage. An All Perils policy combines Comprehensive coverage and Collision or Upset coverage. Comprehensive coverage covers the expenses to fix the damage to your vehicle from unpredictable circumstances such as fire, theft, vandalism, or natural disasters while Collision or Upset coverage covers repairs to your car following damages done to your car in case of an insured event. If you have any questions about the types of coverages for your vehicle, don’t hesitate to contact your broker to learn more about the car insurance coverage that is right for you."
    },
    {
      heading: "How much does car insurance cost?",
      para: "Car insurance costs vary based on your vehicle type, your location, your driving history, how many kilometers you drive daily, and many more factors. To know how much your car insurance policy will cost with Intact Insurance, get a quote today or ask your broker to learn more about car insurance premiums."
    },
  ];

  return (
    <div className="flex flex-col p-5 md:flex-row justify-center md:pt-10 m-auto md:pb-40 md:p-40">
      <div className="text-sm flex flex-col gap-5 md:pt-10">
        <div className="text-lg md:text-3xl font-semibold md:w-[45rem]">
          Frequently asked questions
        </div>
        <p className=" md:w-[28rem]">
          When you need help with insurance and claims, it's at the ready 24/7
        </p>
        <p className="font-semibold">
          I have a different question <span>&#8594;</span>
        </p>
      </div>
      <div>
        {items.map((item) => (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
            <p className="text-sm font-bold md:ml-5 mt-10">
              {item.heading}
            </p>
            <p>^</p>
            </div>
            <div className="bg-[#F5F5F5] text-sm p-5 rounded-2xl">
              {item.para}
              <div>
              {item.point1}
              </div>
              <div>
              {item.point2}
              </div>
              <div>
              {item.point3}
              </div>
              <div>
              {item.point4}
              </div>
              <div>
              {item.point5}
              </div>
              <div>
              {item.para2}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component6;
