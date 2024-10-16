import React from "react";

function Component2() {
  return (
    <div className="bg-[#F5F5F5] pt-40 pb-40">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img src="/Warehouse/img1.png" alt="family" className="h-[30vh] md:h-[76.5vh] pl-0 md:pl-20" />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-16 text-[0.8rem] md:text-[0.9rem]">
            <div className="text-xl md:text-3xl font-semibold text-center md:text-left">
            Commercial insurance solutions 
            <div>for warehousing and storage</div> 
            businesses
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
            <div>
            No matter if you operate your business from a truck depot, a dispatch center, you own several warehouses or operate a refrigerated warehouse, commercial property insurance can keep you protected from property losses, such as theft, vandalism, fire, and damage to tools or equipment you need to continue operating your business.
            </div>
            <ul className="list-disc pl-5">
                <li>Automated warehouses</li>
                <li>Contract warehouses</li>
                <li>General dry storage</li>
                <li>Public warehouses</li>
                <li>Private warehouses</li>
                <li>Bonded warehouses</li>
            </ul>
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

export default Component2;