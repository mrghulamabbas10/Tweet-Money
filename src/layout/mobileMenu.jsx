import React from "react"
import { Link } from "react-router-dom"
import { NAV_LINKS } from "./Navbar"
import { IoIosCloseCircle } from "react-icons/io"

export default function MobileMenu({ setMenuShow }) {
  const HandleClose = () => {
    setMenuShow(false)
  }

  return (
    <div className="absolute right-0 top-0 bg-[#05071A] h-screen z-50 w-[300px] text-white py-10 px-5 animation">
      <span className="absolute top-7 right-7" onClick={HandleClose}>
        <IoIosCloseCircle />
      </span>
      <div className="pl-10 mt-10">
        <ul className="flex flex-col md:gap-6 gap-4">
          {NAV_LINKS.map((item, index) => (
            <li key={index} className="font-semibold ">
              <Link
                to={item.linkPath}
                className="md:text-[1.3vw] text-[4vw] animate__backInDown wow animate__animated"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-[3vw] mt-6 w-full text-center rounded-full py-[2vw] hover:bg-white transition  ease-in-out duration-300 hover:text-black bg-[#02070D] border border-[#0073FF] text-white">
          Join Community
        </button>
      </div>
    </div>
  )
}
