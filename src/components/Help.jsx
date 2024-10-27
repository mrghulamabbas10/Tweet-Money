import React from "react"

export default function HelpSection() {
  return (
    <div className="grid grid-cols-12 gap-[3vw] mt-[5vw] p-[5vw]" id="About">
      <div className="md:col-span-4 col-span-full relative flex items-center justify-center">
        <div className="md:text-start text-center before:w-[30vw] before:-top-[5vw] before:h-[30vw] before:bg-opacity-20 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
          <h1 className="md:text-[3vw] text-[4vw] relative z-10 animate__fadeInUp wow animate__animated">
            We Help Transform Your Business
          </h1>
          <p className=" font-extralight relative z-10 md:w-auto w-[50vw] mx-auto md:mb-0 mb-3 animate__fadeInUp wow animate__animated">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
      </div>
      <div className="md:col-span-4 col-span-6 bg-[#05071A] md:rounded-3xl rounded-2xl space-y-[1vw] shadow-inner px-[2vw] py-[3vw] text-center shadow_1 border border-[#1C244C]">
        <img
          src="/images/icon-1.webp"
          alt=""
          className="md:w-[5vw] w-[8vw] mx-auto rounded-full glow"
        />
        <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
          Streamlined Workflow
        </h3>
        <p className="font-extralight animate__fadeInUp wow animate__animated">
          Effortlessly Collaborate Across Teams and Projects with CloudPeak's
          Seamless and Intuitive Collaboration Tools
        </p>
      </div>
      <div className="md:col-span-4 col-span-6 bg-[#05071A] md:rounded-3xl rounded-2xl space-y-[1vw] shadow-inner px-[2vw] py-[3vw] text-center shadow_1 border border-[#1C244C]">
        <img
          src="/images/icon-1.webp"
          alt=""
          className="md:w-[5vw] w-[8vw] mx-auto glow rounded-full"
        />
        <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
          Robust Data Security
        </h3>
        <p className="font-extralight animate__fadeInUp wow animate__animated">
          Protect Your Sensitive Information with Cutting-Edge Encryption and
          Security Measures solutions
        </p>
      </div>
    </div>
  )
}
