import React from "react";

function Footer() {
  return (
    <footer className="bg-[#343336] text-white py-10 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between sm:justify-center gap-10 sm:gap-[35rem]">
        <div className="mb-10 sm:mb-0 text-center sm:text-left">
          <div className="mb-4">
            <img src="logo2.png" alt="logo" className="h-24 mx-auto sm:mx-0" />
          </div>
          <p>P.O. Box 9999, Station B</p>
          <p>Montreal, ON M5M 3R4</p>
          <p className="mt-4">999-888-0000</p>
          <p>care@binsure.ca</p>
        </div>

        <div className="flex flex-col sm:flex-row text-center sm:text-left">
          <div className="flex flex-col sm:mr-20 mb-6 sm:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t w-full sm:w-[70%] m-auto border-gray-700 mt-10 pt-6 text-center sm:text-start text-xl sm:text-2xl text-gray-400">
        Copyright © 2024 Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
