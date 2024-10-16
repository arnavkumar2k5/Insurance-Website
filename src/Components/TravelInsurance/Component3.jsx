import React, { useState } from "react";

function Component3() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "Need to cancel your trip due to an unforeseen event?",
      para: "Get coverage for your trip against illnesses, injuries, and natural disasters. Travel insurance can reimburse you for your prepaid, non-refundable trip costs.",
    },
    {
      heading: "Was your luggage lost or stolen?",
      para: "Our travel plans can offer reimbursement for the value of your belongings, up to the policy limit. This includes coverage for lost or stolen passports, visas, or other important travel documents, as well as any necessary expenses related to replacing these items.",
    },
    {
      heading: "Stranded due to unexpected travel delays?",
      para: "Whetherit's rebooking your flight, finding alternative transportation, or providing a place to stay, our 24/7 travel assistance teams here to help!",
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40 bg-white pb-40">
      <div className="md:w-1/2 p-3">
        <div className="text-sm text-justify">
            <div className="text-lg text-center md:text-3xl font-bold mb-10 pt-10 md:pr-10">Why should I purchase Travel Insurance?</div>
            <div>
            Whether you're embarking on a weekend getaway ora month-long adventure, unexpected events can happen. A protection plan can help ease your mind and help safeguard your trip, offer reimbursement for covered medical costs, and provide travelers with 24/7 access to assistance services, among other benefits.
            </div>
        </div>
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
        <div className="bg-cyan-400 text-white text-sm p-3 inline-block rounded-lg mt-8 ml-28 md:ml-0">
            Get a Quote
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img src="/travel/bill.png" alt="" />
      </div>
    </div>
  );
}

export default Component3;
