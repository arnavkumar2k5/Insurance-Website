import React from "react";

function Component2() {
  return (
    <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20 ">
      <div className="text-lg text-center">
        <div className="text-3xl font-bold">Auto Insurance coverages </div>
        <p className="text-sm max-w-[47rem] mx-auto mt-10">
          Have the right car insurance when you take the wheel and drive
          worry-free. Our auto insurance will
          <div>
            {" "}
            provide options to obtain the coverage best suited to you and your
            particular vehicle, regardless of
          </div>
          <div>
            {" "}
            whether it is used, new, an SUV, a sedan, or another car type.
          </div>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <div className="text-lg font-semibold md:pr-10 md:mb-5">
            Liability
          </div>
          <p>
            Liability, Bodily Injury and Property Damage Coverage protects you
            if you're responsible for injuring someone or damaging someone
            else's property in a car accident.
          </p>
          <div className="flex justify-end md:mt-[6.3rem]">
            <img
              src="/AutoMobileInsurance/man.png"
              alt="farmer"
              className="h-16"
            />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <div className="text-lg font-semibold md:mb-10">Property Damage</div>
          <p>
            Direct Compensation Property Damage Coverage may cover damages to
            your vehicle and its contents if another driver is at fault.
          </p>
          <div className="flex justify-end md:mt-[5.6rem]">
            <img
              src="/AutoMobileInsurance/img1.png"
              alt="farmer"
              className="h-16"
            />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <div className="text-lg font-semibold mb-10">Accident Benefits</div>
          <p>
            Statutory Accident Benefits Coverage may compensate you if you, your
            passengers, or pedestrians are injured in a car collision,
            regardless of responsibility. Accident Benefits can be increased to
            match your individual requirements.
          </p>
          <div className="flex justify-end md:mt-10">
            <img
              src="/AutoMobileInsurance/img2.png"
              alt="farmer"
              className="h-16"
            />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <div className="text-lg font-semibold md:pr-10 md:mb-5">
            Uninsured Motorist
          </div>
          <p>
            Uninsured Automobile Coverage may protect you in two instances.
            First, if you are injured in a crash by a driver who does not have
            car insurance. Second, if you are unable to identify the vehicle;
            for instance, if you were the victim of a hit and run.
          </p>
          <div className="flex justify-end md:mt-[6.3rem]">
            <img
              src="/AutoMobileInsurance/img3.png"
              alt="farmer"
              className="h-16"
            />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <div className="text-lg font-semibold md:mb-10">
            Physical Damage (optional)
          </div>
          <p>
            Specified Perils Coverage include Collision or Upset Coverage,
            Comprehensive Coverage including fire, theft, vandalism, or some
            natural disasters, All Perils protection
          </p>
          <div className="flex justify-end md:mt-[5.6rem]">
            <img
              src="/AutoMobileInsurance/img4.png"
              alt="farmer"
              className="h-16"
            />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
          <img src="/AutoMobileInsurance/img5.png" alt="car" className="h-72 w-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Component2;
