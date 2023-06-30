import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-primary">
      <div className="container ">
        <div className="grid grid-cols-1 py-7 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1">
            <div className="text-center text-dmode-olive font-semibold">
              <h2 className="text-3xl pb-5 text-white">Services</h2>
              <a href="faq.html">
                <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  FAQs
                </h3>
              </a>
              <a href="contact.html">
                <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  Contact Us
                </h3>
              </a>
              <a href="blogs.html">
                <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  Blogs
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center tex t-dmode-olive font-semibold">
              <h2 className="text-3xl pb-5 text-white">Contact Details</h2>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Phone Number: (+63) 988 123 4567
              </h3>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Telephone Number: (02) 846 9564
              </h3>
              <h3 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Email: cargoMEND@gmail.com
              </h3>
              <h1 className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                Address: 2265f Agoncillo St, Malate, Manila, 1004 Metro Manila
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center text-dmode-olive font-semibold">
              <h2 className="text-3xl text- pb-5 text-white">Legal</h2>
              <a href="privacy.html">
                <p className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  Privacy Policy
                </p>
              </a>
              <a href="licensing.html">
                <p className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  Licensing
                </p>
              </a>
              <a href="terms.html">
                <p className=" border-b-2 dark:border-dmode-lightolive py-3 dark:text-color-white">
                  Terms & Conditions
                </p>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-center font-semibold">
              <h2 className="text-3xl pb-5 text-primary">Didn't Join Yet?</h2>
              <p className="  py-3 dark:text-color-white">
                Let's have a a smooth ride with CarGo rent a Car!
              </p>
              <div className="pt-10">
                <a
                  href="contact.html"
                  className="py-3 px-3 bg-red-600 rounded-lg border-none text-white hover:text-primary"
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="text-center text-lg py-5">
        <p>
          Copyright © 2023 | CarGo Rent a Car | Develop by Team MEND | Kodego
          BootCamp Tropang CharAt64 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
