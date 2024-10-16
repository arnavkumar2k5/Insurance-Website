import React from "react";

function Form() {
  return (
    <div className="p-4 md:p-8 text-xs md:text-sm shadow-2xl md:rounded-3xl bg-white w-full max-w-md mx-auto">
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-xs md:text-sm">Your name</label>
          <input
            type="text"
            placeholder="Your name"
            className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="buy" className="font-semibold text-xs md:text-sm">Planning to buy</label>
          <select
            name="week"
            id="week"
            className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400 pr-10"
          >
            <option value="1week">1-2 Weeks</option>
            <option value="2week">2-3 Weeks</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-xs md:text-sm">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact" className="font-semibold text-xs md:text-sm">
            Contact number <span className="text-red-600">*</span>
          </label>
          <div className="form-input py-2 border border-gray-300 rounded-full flex items-center px-4">
            <select name="country" id="country" className="bg-transparent outline-none">
              <option value="+40">+40</option>
              <option value="+91">+91</option>
            </select>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Contact number"
              className="bg-transparent focus:outline-none w-full px-2"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Get a Free quote"
          className="bg-cyan-400 text-white hover:bg-cyan-500 rounded-full py-2 text-base md:text-lg cursor-pointer transition-colors"
        />

        <div className="text-start text-xs mt-3 text-gray-600">
          I agree to{" "}
          <span className="underline cursor-pointer hover:text-cyan-500">
            terms of use
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer hover:text-cyan-500">
            privacy policy
          </span>{" "}
          when getting a free quote from
        </div>
      </form>
    </div>
  );
}

export default Form;
