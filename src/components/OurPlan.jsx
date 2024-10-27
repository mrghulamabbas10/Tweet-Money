import React from "react"

const Data = [
  {
    title: "Phase 01",
    des: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    title: "Phase 02",
    des: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    title: "Phase 03",
    des: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    title: "Phase 04",
    des: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
  },
]

export default function OurPlan() {
  return (
    <div className="px-[8vw] mt-[5vw]" id="Roadmap">
      <div className=" text-center before:w-[25vw] before:top-[5vw] before:left-[30vw] before:h-[25vw]  before:bg-opacity-20 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
        <div className="flex items-center gap-3 justify-center">
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
          <p className="animate__fadeInUp wow animate__animated">
            Enhance your content
          </p>
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
        </div>
        <h1 className="text-[4vw] font-semibold animate__fadeInUp wow animate__animated">
          Our Plan for Ahead
        </h1>
        <p className="animate__fadeInUp wow animate__animated">
          Explore Our Inspirational Journey, Values, and Commitment to Providing
          <br />
          Exceptional SaaS Solutions That Empower Your Business
        </p>
      </div>
      <div className="flex items-center gap-[15vw] mt-[5vw]">
        {Data.slice(0, 2).map((item, idx) => (
          <div
            key={idx}
            className="md:w-[20vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[3vw] py-[3vw]  shadow_1 border border-[#05071A]"
          >
            <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
              {item.title}
            </h3>
            <p className="font-extralight animate__fadeInUp wow animate__animated">
              {item.des}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center my-[3vw]">
        <span className="md:w-4 md:h-4 w-2.5 h-2 block rounded-full bg-[#1D9BF0] animate__fadeInUp wow animate__animated"></span>
        <hr className="w-[25%]" />
        <span className="md:w-4 md:h-4 w-2.5 h-2 block rounded-full bg-[#1D9BF0] animate__fadeInUp wow animate__animated"></span>
        <hr className="w-[25%]" />
        <span className="md:w-4 md:h-4 w-2.5 h-2 block rounded-full bg-[#1D9BF0] animate__fadeInUp wow animate__animated"></span>
        <hr className="w-[25%]" />
        <span className="md:w-4 md:h-4 w-2.5 h-2 block rounded-full bg-[#1D9BF0] animate__fadeInUp wow animate__animated"></span>
        <hr className="w-[25%]" />
        <span className="md:w-4 md:h-4 w-2.5 h-2 block rounded-full bg-[#1D9BF0] animate__fadeInUp wow animate__animated"></span>
      </div>
      <div className="flex items-center gap-[15vw] justify-end">
        {Data.slice(2, 4).map((item, idx) => (
          <div
            key={idx}
            className="md:w-[20vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[3vw] py-[3vw]  shadow_1 border border-[#05071A]"
          >
            <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
              {item.title}
            </h3>
            <p className="font-extralight animate__fadeInUp wow animate__animated">
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
