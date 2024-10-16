import React from "react";

function Component6() {
  const items = [
    {
      heading: "What does Warehouse & Storage solutions include",
      point1: "Qualified assistance in evaluating risks facing operators from both physical facilities and through contractual arrangements",
      point2: "Providing advice on managing risks through the use of insurance products and contractual language",
      point3: "Simplified underwriting process for securing coverage quotes",
      point4: "Access to a cost-competitive program which is price stable and provides very broadly worded protection",
      point5: "Services that tenants can access to obtain insurance coverage on their unit contents",
      point6: "Access to risk control services to assist in mitigating physical risks on site",
    },
    {
      heading: "What's covered on a Warehouse business insurance policy?",
      point1: "Warehouseman’s legal liability coverage",
      point2: "Self-storage operators legal liability coverage to defend and protect from claims for goods that are lost or damaged while in storage",
      point3: "Wrongful sale and disposal insurance protection provided to cover the cost of disposal and any legal action that may follow",
      point4: "Tenant content abandonment coverage handles proper removal and disposal of environmentally-sensitive or dangerous substances deserted by a tenant",
      point5: "Comprehensive property, liability and crime protection",
      point6: "Competitive rates with low deductibles",
    },
    {
      heading: "What coverage limits should my warehouse insurance policy have?",
      para: "Different insurance coverages may provide various amounts of coverage limits. Most warehouse businesses will purchase a general liability policy with a $5 million coverage limit, but you have the option to choose a lower or higher amount. Speak to one of our insurance experts to determine what the right amount of coverage is for your policy.",
    },  
    {
      heading: "My warehouse property has a railroad sidetrack. Does a warehouse insurance policy cover it?",
      para: "You may need to add additional coverage known as railroad protective liability insurance. Speak to a B-Insure licensed broker for more information",
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

export default Component6;