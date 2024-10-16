import React, { useState } from "react";

function Component6() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        {[ 
          {
            question: "What is commercial general liability insurance?",
            answer: (
              <>
                <li>Commercial general liability (CGL) is an insurance policy that provides financial coverage for claims of third-party bodily injury and property damage caused by your business resulting from negligence or unexpected accidents.</li>
                <li>Should your business be sued, CGL insurance typically covers compensatory damages awarded against you and any legal defense costs, regardless of the lawsuit’s outcome.</li>
              </>
            ),
          },
          {
            question: "What does general liability insurance cover?",
            answer: (
              <>
                General liability insurance typically includes coverage for legal costs and damages related to the following coverage areas:
                <li><span className="font-semibold">Bodily Injury Liability: </span>Injuries or damage to a third party person or property resulting from your business operations. </li>
                <li><span className="font-semibold">Product Liability: </span>Property damage or bodily injury caused by a product you sell or supply. </li>
                <li><span className="font-semibold">Tenant’s Legal Liability: </span>Costs to repair or replace others’ property that you rent or occupy. </li>
                <li><span className="font-semibold">Personal and Advertising Injury Liability:</span> Allegations of defamation, libel, slander, or false advertising. </li>
              </>
            ),
          },
          {
            question: "Who needs commercial general liability insurance?",
            answer: (
              <>
                As a small business owner, you come into contact with any third parties, including clients, vendors, and other businesses, who may be involved in an accident or claim your business caused them loss or damage.
                General liability insurance for small businesses is recommended if:
                <li>You have an office space or clients visit you at home. </li>
                <li>You visit your client’s office space or home. </li>
                <li>You have staff who conduct business off-site. </li>
              </>
            ),
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold md:ml-5 mt-10 pr-20">{item.question}</p>
              <p className="mt-8 cursor-pointer" onClick={() => toggleFAQ(index)}>
                {openIndex === index ? (
                  <span className="font-bold text-3xl">&#xfe40;</span>
                ) : (
                  <span className="font-bold text-3xl">&#xfe3f;</span>
                )}
              </p>
            </div>
            {openIndex === index && (
              <div className="bg-[#F5F5F5] text-sm p-5 rounded-2xl">
                <ul className="list-disc flex flex-col gap-3">
                  {item.answer}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component6;
