import React from "react"
import { Link } from "react-router-dom"

export default function Research() {
  return (
    <div className="px-[10vw] mt-[5vw] grid md:grid-cols-2 grid-cols-1 gap-[5vw] relative">
      <div className="flex justify-center flex-col gap-[1.5vw] before:w-[40vw] before:top-[5vw] before:left-[3vw] before:h-[25vw]  before:bg-opacity-20 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
        <h1 className="md:text-[3vw] text-[5vw] font-semibold animate__fadeInUp wow animate__animated">
          Research & Gauge Sentiment
        </h1>
        <p className="md:text-[1.1vw] text-[2vw] animate__fadeInUp wow animate__animated">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <Link
          to={""}
          className="buy_now block max-w-fit px-[4vw] py-[1vw] md:text-[1.5vw] text-[2vw] rounded-full animate__fadeInUp wow animate__animated"
        >
          Join Queue
        </Link>
      </div>
      <div className="relative">
        <div className="before:w-[25vw] animate__fadeInRight wow animate__animated before:top-[5vw] before:left-[3vw] before:h-[25vw]  before:bg-opacity-50 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
          <img
            src="/images/mobiles.webp"
            alt=""
            className="relative z-10 bounce_2"
          />
        </div>
      </div>
    </div>
  )
}
