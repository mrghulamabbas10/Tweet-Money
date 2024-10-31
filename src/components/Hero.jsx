import React from "react"
import { Link } from "react-router-dom"

import Typewriter from "typewriter-effect"

export default function Hero() {
  return (
    <div className=" md:pt-[4vw] px-[5vw] text-center relative">
      <img
        src="/images/star.webp"
        alt=""
        className="w-[5vw] absolute top-[15vw] right-[10vw] fade-in-out"
      />
      <img
        src="/images/star.webp"
        alt=""
        className="w-[5vw] absolute top-[10vw] left-[10vw] fade-in-out"
      />
      <p className="text-[#FFFFFFA6] md:text-[6vw] text-[5vw] font-extralight text-center animate__shakeY wow animate__animated ">
        Bringing On-Chain{" "}
      </p>
      <h1 className="text-white md:text-[6vw] text-[5vw] font-semibold md:-translate-y-5 -translate-y-2  text-center ">
        <Typewriter
          options={{
            strings: ["Interactions to 𝕏"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <Link
        to={""}
        className="buy_now px-[4vw] py-[1.5vw] md:text-[1.5vw] text-[2vw] rounded-full animate__bounceIn wow animate__animated block max-w-fit mx-auto"
      >
        Buy Now
      </Link>
      <div className="grid grid-cols-12 md:gap-[3vw] md:mt-[5vw]">
        <div className="col-span-3 space-y-[2vw]">
          <div className="relative md:scale-100 scale-110">
            <img
              src="/images/twitte-1.png"
              alt=""
              className=" md:rounded-2xl rounded-[4px] 2xl:w-[100vw]"
            />
            <p className="text-white md:text-[1vw] text-[1.2vw] absolute md:top-[3.7vw] top-[4vw] left-[1vw]">
              <Typewriter
                options={{
                  strings: ["@0xtweetweet send @elonmusk a ☕"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <div className="relative md:scale-100 scale-110">
            <img
              src="/images/twitte-2.png"
              alt=""
              className=" md:rounded-2xl rounded-[4px] 2xl:w-[100vw]"
            />
            <p className="text-white md:text-[1vw] text-[1.2vw] absolute md:top-[3.7vw] top-[4vw] left-[1vw]">
              <Typewriter
                options={{
                  strings: ["@0xtweetweet buy me 1 eth of $TWEET"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
        <div className=" col-span-6 relative">
          <img
            src="/images/hero-3.png"
            alt="hero-3"
            className="  w-[20vw] bounce absolute  right-[5vw] md:top-[10vw] top-[15vw] z-40 "
          />
          <img
            src="/images/hero-2.webp"
            alt="hero-2"
            className="md:w-[30vw] w-[35vw] md:mt-[3vw] mt-[1vw] ml-2 relative z-0 md:-ml-[2vw] 2xl:w-[100vw]"
          />
        </div>
        <div className=" col-span-3  text-start space-y-[2vw]">
          <div className="relative">
            <img
              src="/images/twitte-3.png"
              alt=""
              className="glow md:rounded-2xl rounded-[4px] md:scale-100 scale-110 2xl:w-[100vw]"
            />
            <p className="text-white 2xl:text-[0.8vw] 2xl:w-[17vw] md:text-[1vw] text-[1.1vw] absolute md:top-[3.7vw] top-[4vw] left-1 md:left-[1vw]">
              <Typewriter
                options={{
                  strings: [
                    "@0xtweetweet Send 100 $USDC to these winners: @adam0x @levizero @altsensei",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <div className="relative overflow-hidden md:scale-100 scale-110 ">
            <img
              src="/images/twitte-4.png"
              alt=""
              className="glow md:rounded-2xl rounded-[4px] 2xl:w-[100vw]"
            />
            <p className="text-white 2xl:text-[0.8vw] md:text-[1vw] text-[1.1vw] absolute top-[3.7vw] left-[1vw] ">
              <Typewriter
                options={{
                  strings: [`@0xtweetweet buy 10 eth of $DOGE`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
