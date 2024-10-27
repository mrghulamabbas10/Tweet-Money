import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="px-[5vw] relative">
      <div className="before:w-[20vw] before:bottom-[0vw] before:right-[0vw] before:h-[20vw]  before:md:bg-opacity-30 bg-opacity-60 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
        <div className="grid grid-cols-12 gap-[3vw] before:w-[25vw] before:-top-[5vw] before:left-[3vw] before:h-[25vw]  before:md:bg-opacity-30 bg-opacity-60 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
          <div className="md:col-span-3 col-span-4">
            <img
              src="/images/footer-logo.webp"
              alt=""
              className="md:w-auto w-[25vw] animate__fadeInUp wow animate__animated"
            />
          </div>
          <div className="md:col-span-6 col-span-8 border-x border-gray-800 px-[3vw]">
            <h3 className="text-[#1D9BF0] text-base animate__fadeInUp wow animate__animated">
              ABOUT:
            </h3>
            <p className="md:mt-5 mt-3 md:text-[1.4vw] text-[2vw] animate__fadeInUp wow animate__animated">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="md:col-span-3 col-span-full">
            <h3 className="text-[#1D9BF0]">Links:</h3>
            <div className="flex items-center md:gap-[2vw] gap-5 md:mt-5 mt-3">
              <div className="flex md:flex-col flex-row md:gap-3 gap-5 md:items-start items-center">
                <Link
                  to={"#About"}
                  className="md:text-[1.5vw] text-[4vw] font-light animate__fadeInUp wow animate__animated"
                >
                  About
                </Link>

                <Link
                  to={"#Tokenomics"}
                  className="md:text-[1.5vw] text-[4vw] font-light animate__fadeInUp wow animate__animated"
                >
                  Tokenomics
                </Link>
              </div>
              <div className="flex md:flex-col flex-row md:gap-3 gap-5 md:items-start items-center">
                <Link
                  to={"#Features"}
                  className="md:text-[1.5vw] text-[4vw] font-light animate__fadeInUp wow animate__animated"
                >
                  Features
                </Link>
                <Link
                  to={"#Roadmap"}
                  className="md:text-[1.5vw] text-[4vw] font-light animate__fadeInUp wow animate__animated"
                >
                  {" "}
                  Roadmap
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-10 my-5" />
        <div className="flex items-center md:flex-row flex-col-reverse gap-5 md:justify-between justify-center py-4 text-[#1D9BF0]">
          <p className="text-[#1D9BF0] animate__fadeInUp wow animate__animated">
            © 2024{" "}
          </p>
          <div className="flex items-center gap-3 md:pl-20">
            <Link to={""} className="animate__fadeInUp wow animate__animated">
              Terms & Conditions
            </Link>
            <Link to={""} className="animate__fadeInUp wow animate__animated">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-[2vw]">
            <p className="text-[#1D9BF0] animate__fadeInUp wow animate__animated">
              OUR SOCIALS:
            </p>
            <Link>
              <img
                src="/images/x-2.webp"
                alt=""
                className="md:w-[5vw] w-[7vw] animate__fadeInUp wow animate__animated"
              />
            </Link>
            <Link>
              <img
                src="/images/t.webp"
                alt=""
                className="md:w-[5vw] w-[7vw] animate__fadeInUp wow animate__animated"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
