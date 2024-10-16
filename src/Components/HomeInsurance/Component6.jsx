import React, { useState } from "react";

function Component6() {

  const [openIndex, setOpenIndex] = useState(null); 
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "Is it mandatory to have house insurance in Canada",
      para: "In Canada, home insurance isn’t mandatory. However, most banks and mortgage loaners will expect you have a house insurance policy as part of the financing agreement.",
    },
    {
      heading: "How much is house insurance in Canada monthly?",
      para: "On a monthly basis, home insurance in Canada is determined based on your home’s location and its value as well as numerous other factors. It can vary depending on the location of your home, its age and condition, and other factors. See the question above for more details on how your insurance premium is calculated.",
    },
    {
      heading: "Are house insurance premiums going up in Canada",
      para: "Home insurance coverage options have generally increased by 5 percent as of 2022 in Canada. One of the primary reasons for this is extreme weather conditions due to climate change, causing more homes to take weather-related damages."
    },
    {
      heading: "Does house insurance cost more if you have a mortgage?",
      para: "Yes. The number of mortgages registered against the property is considered when defining your insurance premium, and there are savings for properties that are mortgage free. Read the questions above for further details, talk to your broker or get a home insurance quote today to get your house insurance premium."
    },
    {
      heading: "Can I claim a broken fence on my homeowner's insurance?",
      para: "It depends on your home insurance policy and other factors: the reasons why the fence was broken and if it is covered by an insured peril in your policy. If it is covered, outside structures can be claimed on your house insurance policy. "
    },
  ];

  return (
    <div className="bg-white flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40">
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
      {items.map((item, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index)}>
              <p className="text-sm font-semibold md:ml-5 mt-10">
                {item.heading}
              </p>
              <p className="mt-8">{openIndex === index ? <span className="font-bold text-3xl">&#xfe40;</span> : <span className="font-bold text-3xl">&#xfe3f;</span> }</p>
            </div>
            {openIndex === index && (
              <div className="bg-[#F5F5F5] text-sm p-5 rounded-2xl">
                {item.para}
                {(item.point1 || item.point2 || item.point3 || item.point4) && (
                  <ul className="list-disc pl-5">
                    {item.point1 && <li>{item.point1}</li>}
                    {item.point2 && <li>{item.point2}</li>}
                    {item.point3 && <li>{item.point3}</li>}
                    {item.point4 && <li>{item.point4}</li>}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component6;
