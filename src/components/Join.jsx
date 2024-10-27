import React from "react"
import { Link } from "react-router-dom"

export default function JoinSection() {
  return (
    <div className="join relative">
      <img
        src="/images/star.webp"
        alt=""
        className="w-[6vw] absolute top-[15vw] right-[10vw] fade-in-out animate__fadeInUp wow animate__animated"
      />
      <img
        src="/images/star.webp"
        alt=""
        className="w-[6vw] absolute bottom-[15vw] left-[10vw] fade-in-out animate__fadeInUp wow animate__animated"
      />
      <p className="text-[#FFFFFFA6] md:text-[6vw] text-[5vw] font-extralight text-center animate__fadeInUp wow animate__animated">
        Bringing On-Chain{" "}
      </p>
      <h1 className="text-white md:text-[6vw] text-[5vw] font-semibold md:-translate-y-5 -translate-y-2  text-center animate__fadeInUp wow animate__animated">
        Interactions to Twitter
      </h1>
      <Link
        to={""}
        className="animate__fadeInUp wow animate__animated block text-nowrap text-center px-[3vw] max-w-fit rounded-full py-[1vw] hover:bg-white transition  ease-in-out duration-300 hover:text-black bg-[#02070D] border border-[#0073FF] text-white"
      >
        Join Community
      </Link>
    </div>
  )
}
