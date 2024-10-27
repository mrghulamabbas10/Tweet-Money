import React from "react"
import { Link } from "react-router-dom"

export default function SocialSection() {
  return (
    <div className="SocialSection relative px-[8vw] md:pt-0 pt-[3vw]">
      <div className="absolute main -z-0">
        <div className="bg-outer bg-[#6ECAFF26] w-[40vw] h-[40vw] rounded-full flex items-center justify-center">
          <div className="bg-inner1 bg-[#6ECAFF26] w-[32vw] h-[32vw] rounded-full flex items-center justify-center">
            <div className="bg-inner2 bg-[#6ECAFF26] w-[24vw] h-[24vw] rounded-full flex items-center justify-center">
              <div className="bg-inner3 bg-[#6ECAFF26] w-[18vw] h-[18vw] rounded-full flex items-center justify-center">
                <div className="bg-inner4 bg-[#6ECAFF26] w-[10vw] h-[10vw] rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:-mt-20 -mt-8  text-center before:w-[25vw] before:top-[5vw] before:left-[30vw] before:h-[25vw]  before:bg-opacity-20 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
        <div className="flex items-center gap-3 justify-center">
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated block" />
          <p className="animate__fadeInUp wow animate__animated block">
            Our Socials
          </p>
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated block" />
        </div>
        <h1 className="text-[4vw] font-semibold animate__fadeInUp wow animate__animated block">
          Social Media Integration
        </h1>
      </div>
      <div className="flex items-center gap-[4vw] relative z-50 ">
        <Link to="">
          <img
            src="/images/p.webp"
            alt=""
            className="md:w-auto w-[5vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>
        <Link to="">
          <img
            src="/images/tik.webp"
            alt=""
            className="md:w-auto w-[8vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>
        <Link to="">
          <img
            src="/images/insta.webp"
            alt=""
            className="md:w-auto w-[10vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>

        <img
          src="/images/social-main.webp"
          alt=""
          className="md:w-auto w-[20vw] md:-ml-5 -ml-1"
        />

        <Link to="">
          <img
            src="/images/you.webp"
            alt=""
            className="md:w-auto w-[10vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>
        <Link to="">
          <img
            src="/images/x.webp"
            alt=""
            className="md:w-auto w-[8vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>
        <Link to="">
          <img
            src="/images/face.webp"
            alt=""
            className="md:w-auto w-[5vw] animate__fadeInUp wow animate__animated block"
          />
        </Link>
      </div>
    </div>
  )
}
