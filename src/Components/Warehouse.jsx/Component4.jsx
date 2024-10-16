import React from 'react'

function Component4() {
    return (
        <div className="flex flex-col justify-center items-center py-10 mx-auto gap-20 md:p-20 p-5">
          <div className="text-lg text-center">
            <div className="text-3xl font-bold">Common insurance claims scenarios</div>
            <p className="text-lg max-w-[47rem] mx-auto mt-10">
            Consider these real-world examples to understand <div>just how vital restaurant insurance truly is:</div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-sm gap-10 justify-center">
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Warehouse/img7.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Equipment malfunction
              </div>
              <p>
              Your warehouse’s refrigeration systems malfunction overnight leading to thousands of dollars in losses of perishable goods.
              </p>
              <div className='mt-10 font-semibold'>
              What happens next?
              <p className='font-normal'>Your equipment breakdown insurance may cover the cost to repair your refrigeration systems, and your commercial property insurance may pay to replace the spoiled perishable goods</p>
              </div>
            </div>
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Warehouse/img8.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Fire based events
              </div>
              <p>
              A fire ignites in your dry storage warehouse that damages the interior of the building and some of your equipment.
              </p>
              <div className='mt-[3.8rem] font-semibold'>
              What happens next?
              <p className='font-normal'>Your warehouse property insurance may cover the cost to repair the damages to your warehouse and the business contents that were damaged up to your policy’s limit.</p>
              </div>
            </div>
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Warehouse/img9.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Data Breach
              </div>
              <p>
              A data breach exposes your customers’ confidential information to fraud.
              </p>
              <div className='mt-[5.1rem] font-semibold'>
              What happens next?
              <p className='font-normal'>Your cyber liability insurance may pay to provide you with funds for legal advice, restoration of damaged software, crisis management services, credit monitoring, and customer notification fees.</p>
              </div>
            </div>
          </div>
            <div className='bg-[#24BBE3] p-3 text-white rounded-lg'>Insure your restaurant now!</div>
        </div>
    )
}

export default Component4;