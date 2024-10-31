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
          Explore Our Inspirational Journey and Commitment to Provide
          <br />
          Exceptional Innovative Onchain Interaction on 𝕏
        </p>
      </div>
      <div className="flex items-center gap-[15vw] mt-[5vw]">
        <div className="md:w-[25vw] md:h-[18vw] h-[22vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[2vw] py-[3vw]  shadow_1 border border-[#05071A]">
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            Phase 01
          </h3>
          <ul className="list-disc md:pl-[1.2vw] pl-[3vw] ">
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Launch $TWEET
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Trading / transferring money with a tweet 
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Grow community and presence on X
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Community bonus competitions
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Private trading in DMs
            </li>
          </ul>
        </div>
        <div className="md:w-[25vw] md:h-[18vw] h-[22vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[4vw] py-[3vw]  shadow_1 border border-[#05071A]">
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            Phase 03
          </h3>
          <p className="animate__fadeInUp wow animate__animated font-light text-white text-[1.4vw] mt-[3vw]">
            This will be revealed soon
          </p>
        </div>
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
        <div className="md:w-[25vw] md:h-[18vw] h-[22vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[2vw] py-[3vw]  shadow_1 border border-[#05071A]">
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            Phase 02
          </h3>
          <ul className="list-disc md:pl-[1.2vw] pl-[3vw] ">
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Expand to other chains (EVM, SOL)
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Cashtag NFTs
            </li>
            <li className="animate__fadeInUp wow animate__animated font-light text-[1.3vw] md:text-[1vw]">
              Follow the Money with $TWEET signals
            </li>
          </ul>
        </div>
        <div className="md:w-[25vw] md:h-[18vw] h-[22vw] w-full bg-[#05071A] md:rounded-3xl rounded-xl space-y-[1vw] shadow-inner px-[4vw] py-[3vw]  shadow_1 border border-[#05071A]">
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            Phase 04
          </h3>
          <p className="animate__fadeInUp wow animate__animated font-light text-white text-[1.4vw] mt-[3vw]">
            This will be revealed soon
          </p>
        </div>
      </div>
    </div>
  )
}
