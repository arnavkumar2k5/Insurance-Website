import React from "react";

function Component5() {
  const items = [
    {
      heading: "How much does restaurant insurance in Canada cost?",
      para: "The annual cost of business insurance for restaurants and bars varies greatly. Location plays a big role; insuring a downtown Montreal restaurant would be more expensive than insuring one in the suburbs considering the city is more congested and harder for fire departments to get to in the event of a fire, for example. Here are some other factors that determine the annual restaurant insurance price:",
      point1: "Claims history",
      point2: "Percentage of alcohol sales",
      point3: "Construction material of the building",
      point4: "Your deductible amount",
    },
    {
      heading: "What's covered on a restaurant business insurance policy?",
      para: "Building – If your restaurant or bar owner is the building owner, you can purchase insurance that will cover it from fire, vandalism, water, earthquakes and more.",
      point1: "Betterments – Applicable to restaurants who are tenants.",
      point2: "Contents , Stocks",
      point3: "Equipment Breakdown",
      point4: "Business Interruption",
      point5: "Liability",
      point6: "Cyber Insurance",
    },
    {
      heading: "How do I lower the price of my restaurant insurance policy?",
      para: "Restaurants pay higher business insurance rates in comparison to other industries because restaurants make more claims than others. Here are some ways to lower your premium:",
      point1: "Make sure your CO2 ducts are cleaned at least every 6 months.",
      point2: "Keep your restaurant clean and floors dry so customers won’t slip and injure themselves.",
      point3: "Put your cash vault in a secure location, ideally hidden away.",
      point4: "Avoid making small claims.",
      point5: "Increase your deductible. We suggest a deductible between $2,500 and $10,000, which will help keep your overall premiums down.",
    },  
    {
      heading: "Does B-Insure offer restaurant insurance online quotes?",
      para: "Building – If your restaurant or bar owner is the building owner, you can purchase insurance that will cover it from fire, vandalism, water, earthquakes and more.",
      point1: "Betterments – Applicable to restaurants who are tenants.",
      point2: "Contents , Stocks",
      point3: "Equipment Breakdown",
      point4: "Business Interruption",
      point5: "Liability",
      point6: "Cyber Insurance",
    },
  ];

  return (
    <div className="flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40">
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
            <p className="text-sm font-semibold md:ml-5 mt-10">
              {item.heading}
            </p>
            <p>^</p>
            </div>
            <div className="bg-[#F5F5F5] text-sm p-5 rounded-2xl">
              {item.para}
              {(item.point1 || item.point2 || item.point3 || item.point4 || item.point5 || item.point6) && (
                <ul className="list-disc pl-5">
                  {item.point1 && <li>{item.point1}</li>}
                  {item.point2 && <li>{item.point2}</li>}
                  {item.point3 && <li>{item.point3}</li>}
                  {item.point4 && <li>{item.point4}</li>}
                  {item.point5 && <li>{item.point5}</li>}
                  {item.point6 && <li>{item.point6}</li>}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component5;