import React from "react";

function Component5() {
  return (
    <div className="bg-white pt-10 md:pt-20 p-5 md:p-40">
      <div className="m-auto flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10 text-sm md:text-lg">
            <div className="text-xl md:text-2xl font-bold">
              How much insurance coverage do you need?
            </div>
            <div>
              Ideally, you want to make sure your debts are covered, so you
              don't leave major expenses behind for your loved ones.
            </div>
            <div>
              Here are a few things to consider:
              <ul className="list-disc pl-5 md:pl-8">
                <li>Your income</li>
                <li>Net worth</li>
                <li>Family needs</li>
                <li>Debt</li>
                <li>Other insurance you have</li>
              </ul>
            </div>
            <div className="pt-2 pb-2 m-auto rounded-lg text-sm text-center text-white bg-cyan-400 w-[50%] md:w-[40%]">
              Get a Quote
            </div>
          </div>

          <div>
            <img
              src="family3.png"
              alt="family"
              className="h-[40vh] md:h-[70vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
