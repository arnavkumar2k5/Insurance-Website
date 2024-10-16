import React from "react";

function Component1() {
  return (
    <div className="bg-white">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40">
          <div className="flex flex-col text-center md:text-left md:text-lg pl-0 md:pl-20">
            <span className="w-full font-semibold">
              Get instant travel insurance quotes
            </span>
            <span>from 20 of Canada's Top Insurers</span>
          </div>
          <div className="mt-5 md:mt-0">
            <img src="family1.png" alt="family1" className="h-16 md:h-20"/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img src="/HomeInsurance/img1.png" alt="family" className="h-[50vh] md:h-[76.5vh] pl-0 md:pl-20" />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem]">
            <div className="text-xl md:text-3xl font-bold text-center md:text-left">
            No fuss. Just the best Home
            <div>Insurance quotes in</div>
            <div>minutes!</div>
            </div>
            <div className="md:pr-20 flex flex-col gap-5">
            <div>
            We will find you money-saving home insurance from Canada’s top insurance providers.
            </div>
            <div className="font-semibold">Compare quotes, purchase, and manage your policy – all online!</div>
            <div>
            As Canada’s first full-service online insurance broker, we at B-Insure know your time is valuable and you work hard for your money. Since 2007, our brokerage has been helping clients shop the market to find the most affordable home insurance policies customized to your needs. B-Insure makes it simple to find out which leading insurer will save you money.
            After choosing the policy that’s the best fit, you can purchase your home insurance policy, print your proof of insurance, and manage your policy information anytime
            </div>
            </div>
            <div className="rounded-lg bg-[#24BBE3] text-white p-3 text-center w-[50%] md:w-[30%] self-center md:self-start">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;