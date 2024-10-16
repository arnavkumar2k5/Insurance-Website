import React from 'react'

function Component4() {
    return (
        <div className="bg-white flex flex-col justify-center items-center py-10 mx-auto gap-20 md:p-20 p-5">
          <div className="text-lg text-center">
            <div className="text-3xl font-bold">Common insurance claims scenarios</div>
            <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
            Consider these real-world examples to understand <div>just how vital restaurant insurance truly is:</div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-sm gap-10 justify-center">
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Restaurant/img8.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Alcohol-Induced Slip-and-Fall Claim
              </div>
              <p>
              One of your bartenders overserves alcohol to a customer. As the customer stands up to leave, they fall and hurt their wrist.
              </p>
              <div className='mt-16 font-semibold'>
              What happens next?
              <p className='font-normal'>Your customer decides to sue for bodily injury and is successful. Fortunately, your liquor liability and commercial general liability insurance work together to cover the medical and legal fees, equaling $10,000.</p>
              </div>
            </div>
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Restaurant/img9.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Foodborne Illness Claim
              </div>
              <p>
              A customer orders your highly acclaimed seafood dish. Your chef has served out-of-date seafood without realizing it, and your customer suffers from food poisoning.
              </p>
              <div className='mt-16 font-semibold'>
              What happens next?
              <p className='font-normal'>Your customer decides to sue your restaurant for bodily injury. Luckily, you purchased a product liability insurance policy that covers the legal and medical fees associated with the case.</p>
              </div>
            </div>
            <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%]">
              <div className="flex justify-start mb-10">
                <img src="/Restaurant/img10.png" alt="farmer" className="h-16" />
              </div>
              <div className="text-lg font-semibold md:mb-5">
              Delivery Claim
              </div>
              <p>
              You run a take-out restaurant. One of your delivery drivers accidentally knocks over a beautiful vase on your customer’s porch.
              </p>
              <div className='mt-16 font-semibold'>
              What happens next?
              <p className='font-normal'>The customer sues your take-out restaurant for property damage, and their claim is successful. Thankfully, your commercial general liability insurance covers the cost of replacing the vase, equaling $2,000.</p>
              </div>
            </div>
          </div>
            <div className='bg-[#24BBE3] p-3 text-white rounded-lg'>Insure your restaurant now!</div>
        </div>
    )
}

export default Component4;