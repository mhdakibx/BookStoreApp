import React from "react";
import bannerImage from "../././././../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="container mx-auto lg:mx-15 px-2 flex flex-col md:flex-row my-10 lg:h-screen lg:items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="space-y-2 lg:space-y-4 mt-4 md:mt-10 lg:mt-20 lg:ml-0">
            <h1 className="text-3xl  lg:text-6xl font-bold">
              Hello, Welcome{" "}
              <span className="text-pink-500">CPIBookStore!!!</span>
            </h1>
            <p className="lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fuga ut amet. Quo recusandae modi a, ab quibusdam quos
              itaque.
            </p>

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com"  required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 order-1">
            <img src={bannerImage} alt="Banner" className="rounded-lg  lg:ml-20 md:w-90 md:h-90 lg:w-120 lg:h-120"/>
        </div>
      </div>
    </>
  );
}

export default Banner;
