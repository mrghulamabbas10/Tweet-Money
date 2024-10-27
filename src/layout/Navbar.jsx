import React, { useState } from "react"
import { Link } from "react-router-dom"
import MobileMenu from "./mobileMenu"

// import { MdOutlineSegment } from 'react-icons/md'
import { FaBarsStaggered } from "react-icons/fa6"

export const NAV_LINKS = [
  {
    name: "About",
    linkPath: "#About",
  },
  {
    name: "Features",
    linkPath: "#Features",
  },
  {
    name: "Tokenomics",
    linkPath: "#Tokenomics",
  },
  {
    name: "Roadmap",
    linkPath: "#Roadmap",
  },
]

export default function Navbar() {
  const [menuShow, setMenuShow] = useState(false)

  const HandleClick = () => {
    setMenuShow(true)
  }

  return (
    <div className="relative">
      <nav className="px-[5vw] md:py-6 py-3 flex items-center justify-between ">
        <div>
          <Link to="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              className="md:w-[15vw] w-[30vw] animate__backInDown wow animate__animated"
            />
          </Link>
        </div>
        <div className="md:block hidden">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="">
                <Link
                  to={item.linkPath}
                  className="animate__backInDown wow animate__animated block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:block hidden">
          <Link
            to={""}
            className="px-[3vw] animate__backInDown wow animate__animated rounded-full py-[1vw] hover:bg-white transition  ease-in-out duration-300 hover:text-black bg-[#02070D] border border-[#0073FF] text-white"
          >
            Join Community
          </Link>
        </div>
        <div className="md:hidden block relative">
          <button onClick={HandleClick}>
            <FaBarsStaggered />
          </button>
        </div>
      </nav>
      <div className="animation">
        {menuShow && <MobileMenu setMenuShow={setMenuShow} />}
      </div>
    </div>
  )
}
