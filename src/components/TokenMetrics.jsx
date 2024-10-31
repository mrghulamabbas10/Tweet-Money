import React, { useEffect, useRef, useState } from "react"

export default function TokenMetrics() {
  const characters = ["1", "0", "M", "I", "l", "l", "I", "o", "n"]
  const [visibleCount, setVisibleCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    )

    const currentRef = sectionRef.current // Copy the ref value to a variable

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef) // Use the variable in cleanup
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && visibleCount < characters.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1)
      }, 500) // Adjust duration for character increment
      return () => clearTimeout(timer)
    }
  }, [isVisible, visibleCount, characters.length])

  return (
    <div className="px-[10vw] my-[8vw] after:w-[40vw] " id="Tokenomics">
      <div className="relative ">
        <div className="text-center before:w-[40vw] before:top-[5vw] before:left-[30vw] before:h-[25vw]  before:bg-opacity-40 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block     ">
          <div className="flex items-center gap-3 justify-center">
            <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
            <p className="animate__fadeInUp wow animate__animated">
              Tokenomics
            </p>
            <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
          </div>
          <h1 className="text-[4vw] font-semibold animate__fadeInUp wow animate__animated">
            Token Metrics
          </h1>
          <p className="animate__fadeInUp wow animate__animated">
            The tokenomic breakdown of $TWEET is as follows:
          </p>
        </div>
        <div className="relative" ref={sectionRef}>
          <img
            src="/images/supply.webp"
            alt=""
            className="w-[50vw] mx-auto mt-[3vw] animate__fadeInUp wow animate__animated"
          />
          <div className="absolute top-[5vw] left-[16vw] flex items-center font-semibold md:gap-3 gap-1">
            {characters.map((char, index) => (
              <span
                key={index}
                className={`box_2 uppercase md:text-[4vw] text-[3vw] block font-semibold ${
                  index < visibleCount ? "animate" : ""
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[4vw] mt-[5vw]">
        <div className=" bg-[#05071A] md:rounded-3xl rounded-2xl space-y-[1vw] shadow-inner md:px-[5vw] px-[3vw] py-[2vw] text-center shadow_1 border border-[#1C244C]">
          <img
            src="/images/text-icon.webp"
            alt=""
            className="md:w-[5vw] w-[8vw] mx-auto rounded-full glow_2"
          />
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            {" "}
            Tax 5/5
          </h3>
          <p className="font-extralight animate__fadeInUp wow animate__animated">
            4% Tax used for Marketing & Development, 1% Tax auto-added to LP,
            and in future buyback.
          </p>
        </div>
        <div className=" bg-[#05071A] md:rounded-3xl rounded-2xl space-y-[1vw] shadow-inner px-[5vw] py-[2vw] text-center shadow_1 border border-[#1C244C]">
          <img
            src="/images/trading.webp"
            alt=""
            className="md:w-[5vw] w-[8vw] mx-auto rounded-full glow_2"
          />
          <h3 className="md:text-[2vw] text-[3vw] animate__fadeInUp wow animate__animated">
            {" "}
            Trading Fee
          </h3>
          <p className="font-extralight animate__fadeInUp wow animate__animated">
            Starting with 0% fee on every trade.  Later on, when there is more
            volume a fee of 0.4% will be added.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[5vw] md:mt-[5vw] mt-[8vw] ">
        <div className="grid md:col-span-3 col-span-full ">
          <div className="flex md:flex-col flex-row gap-[10vw]  ">
            <div className="space-y-2">
              <span className="glow-blink bg-[#53B8FC] rounded-md w-5 h-5 block"></span>
              <h3 className="md:text-[2vw] text-[4vw] animate__fadeInUp wow animate__animated">
                80% (8m){" "}
              </h3>
              <p className="md:text-[1.1vw] text-[2.5vw] animate__fadeInUp wow animate__animated">
                Liquidity paired with 1 ETH {"->"} <br /> liquidity locked 1
                year  
              </p>
            </div>
            <div className="space-y-2">
              <span className="glow-blink bg-[#B7E0D2] rounded-md w-5 h-5 block"></span>
              <h3 className="md:text-[2vw] text-[4vw] animate__fadeInUp wow animate__animated">
                12% (1.2m)
              </h3>
              <p className="md:text-[1.1vw] text-[2.5vw] animate__fadeInUp wow animate__animated">
                Team tokens
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:col-span-6 col-span-full">
          <img
            src="/images/chart-1.png"
            alt=""
            className="md:w-auto w-[90%] mx-auto rounding "
          />
        </div>
        <div className="grid md:col-span-3 col-span-full">
          <div className="flex md:flex-col flex-row gap-[10vw] ">
            <div className="space-y-2 w-full">
              <span className="glow-blink bg-[#819BCE] rounded-md w-5 h-5 block"></span>
              <h3 className="md:text-[2vw] text-[4vw] animate__fadeInUp wow animate__animated">
                10% (1m)
              </h3>
              <p className="md:text-[1.1vw] text-[2.5vw] animate__fadeInUp wow animate__animated">
                Community Bonus System
              </p>
            </div>
            <div className="space-y-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
