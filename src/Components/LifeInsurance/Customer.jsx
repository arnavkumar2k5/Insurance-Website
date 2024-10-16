import React from "react";

function Customer() {
  return (
    <div className="flex flex-col justify-center text-center bg-white pb-20 md:pb-40 pt-40">
      <div className="text-xs md:text-sm">
        <p className="text-2xl md:text-3xl font-semibold">What people say</p>
        <p className="mt-3 md:mt-5">Our customers are our top priority</p>
        <p>Let's hear what they have to say.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 text-start text-xs md:text-sm mt-10 md:mt-20">
        <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mb-40">
          <div>
            “Great service, very easy and well-explained procedures and
            information needed for insurance. Greg was great to work with, and
            had excellent communication skills. 10/10 recommend.”
          </div>
          <div className="flex mt-10 md:mt-20 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xs md:text-sm">- Palakas Fotini</div>
          </div>
        </div>

        <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mt-40">
          <div className="w-[95%]">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-10 md:mt-28 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xs md:text-sm">- Palakas Fotini</div>
          </div>
        </div>

        <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mb-40">
          <div className="w-[95%]">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-10 md:mt-28 justify-between">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xs md:text-sm">- Dirk Michon</div>
          </div>
        </div>

        <div className="shadow-2xl border-2 w-[80%] md:w-[17%]  pt-10 rounded-3xl md:mt-40">
          <div className="w-[95%] p-5">
            Greg is always making sure all my insurance needs are covered.
            Excellent service and very responsive.. thanks again!
          </div>
          <div className="flex mt-10 md:mt-20 p-3 justify-center items-center">
            <div>⭐⭐⭐⭐⭐</div>
            <div className="text-xs md:text-sm">- Derpina Wickers </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
