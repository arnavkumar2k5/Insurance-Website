import React, { useState } from "react";

function Component7() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is a Travel Insurance?",
      answer: `Travel insurance is coverage designed to protect against risks and financial losses 
      that could happen while traveling. The risks range from minor inconveniences 
      such as delayed or lost bags and trip cancellations, to medical emergencies.`,
    },
    {
      question: "What is not covered by travel insurance?",
      answer: `Some insurers do not cover such expenses as routine health checkups, non-emergency care, and cosmetic surgeries. 
      Limitations and exclusions apply depending on where you are traveling or if you have a pre-existing medical condition.`,
    },
    {
      question: "What should I look for in travel insurance?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Medical coverage</li>
          <li>Coverage for pre-existing medical conditions</li>
          <li>Coverage for delayed, lost, or damaged luggage</li>
          <li>Travel assistance while abroad</li>
          <li>Repatriation in case of death</li>
        </ul>
      ),
    },
    {
      question: "Is a pickup truck considered a commercial vehicle?",
      answer: `In most provinces, pickup trucks are considered commercial vehicles if used for business purposes. 
      Check with your provincial transportation ministry to confirm.`,
    },
    {
      question: "Does applying for travel insurance need a medical record check?",
      answer: `When applying for travel insurance, your broker will ask if you have any pre-existing conditions. 
      While having a pre-existing condition doesn't exclude coverage, it may limit coverage for medical emergencies.`,
    },
    {
      question: "How much does Travel Insurance cost for Canada?",
      answer: (
        <div>
          In general, travel insurance to Canada costs about 3 – 10% of your total prepaid and non-refundable trip expenses. 
          The cost depends on:
          <ul className="list-disc pl-5">
            <li><b>Total trip cost:</b> The non-refundable costs you've already paid for the trip.</li>
            <li><b>Age:</b> Older individuals face higher health risks, influencing the cost.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can you buy travel insurance after booking a flight?",
      answer: `Yes, travelers can purchase travel insurance after booking their flights. It's advisable to buy as soon as 
      you make the initial trip deposit to cover unforeseen events before departure.`,
    },
  ];
  return (
    <div className="bg-white flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40">
      <div className="text-sm flex flex-col gap-5 md:pt-10">
        <div className="text-lg md:text-3xl font-semibold md:w-[45rem]">
          Frequently asked questions
        </div>
        <p className="md:w-[28rem]">
          When you need help with insurance and claims, it's at the ready 24/7
        </p>
        <p className="font-semibold">
          I have a different question <span>&#8594;</span>
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {items.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                <p className="text-sm font-semibold md:ml-5 mt-10">
                  {item.question}
                </p>
                <p className="mt-8">
                  {openIndex === index ? (
                    <span className="font-bold text-3xl">&#xfe40;</span>
                  ) : (
                    <span className="font-bold text-3xl">&#xfe3f;</span>
                  )}
                </p>
              </div>
              {openIndex === index && (
                <div className="bg-[#F5F5F5] text-sm p-5 rounded-2xl">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Component7;
