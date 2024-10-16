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
            <img src="family1.png" alt="family1" className="h-16 md:h-20" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20">
          <div className="text-lg text-center">
            <div className="text-3xl font-bold">Why Choose</div>
            <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
            We help Canada small business owners save time and money by providing
              <div>
                {" "}
                a convenient and affordable way to buy business insurance
              </div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg font-bold md:pr-10 md:mb-5">
                Personalized car insurance premium
              </div>
              <p>
              Get car insurance that’s priced for you with top insurers along with online access to support and other resources
              </p>
              <div className="flex justify-end md:mt-[6.3rem]">
                <img src="/AutoMobileInsurance/car.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg font-bold md:mb-10">
              Roadside assistance
              </div>
              <p>
              Drive worry-free with roadside assistance. Available at a competitive price, you can add roadside assistance to your auto insurance policy.
              </p>
              <div className="flex justify-end md:mt-[5.6rem]">
                <img src="/AutoMobileInsurance/car1.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg font-bold mb-10">Support from Canada’s best
              claims team</div>
              <p>
              No one wants to be involved in an accident. In the event it happens, and if you need to make an auto insurance claim, our team will guide 
              and give expert advice as per case.
              </p>
              <div className="flex justify-end md:mt-10">
                <img src="/AutoMobileInsurance/message.png" alt="farmer" className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
