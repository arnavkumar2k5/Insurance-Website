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

        <div className="flex flex-col justify-center items-center py-10 mx-auto gap-20">
          <div className="text-lg text-center">
            <div className="text-3xl font-bold">Why Choose</div>
            <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
            Restaurant insurance is tailored to protect owners from risks like third-party
              <div>
                {" "}
                injuries, property damage, accidents, and equipment breakdowns
              </div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-lg font-semibold md:mb-5">
              Intuitive Online Experience
              </div>
              <p>
              Do everything online, at your convenience
              </p>
              <div className="flex justify-end md:mt-[4.4rem]">
                <img src="/Restaurant/img1.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-lg font-semibold md:mb-5">
              Always Here For You
              </div>
              <p>
              We’re just a click away
              </p>
              <div className="flex justify-end md:mt-[5.6rem]">
                <img src="/Restaurant/img2.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-lg font-semibold mb-5">Full Transparency</div>
              <p>
              Get only the coverage you need in clear language
              </p>
              <div className="flex justify-end md:mt-[4.5rem]">
                <img src="/Restaurant/img3.png" alt="farmer" className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
