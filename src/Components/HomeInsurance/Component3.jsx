import React from "react";

function Component3() {
  return (
    <div className="bg-white pt-10 md:pt-20 p-5 md:p-40">
      <div className="m-auto flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10 text-sm md:text-lg md:pr-12">
            <div className="text-lg md:text-2xl font-bold">
            How much Home Insurance do I need?
            </div>
            <div>
            When trying to determine how much home insurance you’ll need there’s several factors to consider. Here are some guidelines to help you decide: While your insurance broker can recommend coverage, there are other ways for you to make sure. For a quick estimate, multiply the square footage of your home by local per-square-foot building costs.
            </div>
            <div>
              Here are a few things to consider:
              <ul className="font-semibold">
                <li>- Changes to Building Codes</li>
                <li>- Older homes</li>
                <li>- Inflation</li>
                <li>- Your Possessions</li>
                <li>- Additional Living Expenses</li>
                <li>- Liability</li>
                <li>- Umbrella or Excess Liability Policy</li>
              </ul>
            <div className="pt-2 pb-2 m-auto rounded-lg text-sm text-center mt-5 md:mr-96 text-white bg-cyan-400 w-[50%] md:w-[40%]">
              Get a Quote
            </div>
            </div>
          </div>

          <div>
            <img
              src="/HomeInsurance/img6.png"
              alt="family"
              className="h-[40vh] md:h-[85vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
