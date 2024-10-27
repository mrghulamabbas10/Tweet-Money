import React from "react"
import { Link } from "react-router-dom"

export default function Links() {
  return (
    <div className="flex items-center justify-between px-[5vw] links -mt-[5vw] relative z-40">
      <Link to={""}>
        <img
          src="/images/eth.webp"
          alt=""
          className="w-[12vw] animate__heartBeat wow animate__animated"
        />
      </Link>
      <Link to={""}>
        <img
          src="/images/dextools.webp"
          alt=""
          className="w-[10vw] animate__heartBeat wow animate__animated"
        />
      </Link>
      <div className="-translate-y-[3vw] scale-150">
        <img src="/images/scrol.webp" alt="" className="w-[7vw]  rounding " />
      </div>
      <Link to={""}>
        <img
          src="/images/dexsiner.webp"
          alt=""
          className="w-[13vw] animate__heartBeat wow animate__animated"
        />
      </Link>
      <Link to={""}>
        <img
          src="/images/dexview.webp"
          alt=""
          className="w-[10vw] animate__heartBeat wow animate__animated"
        />
      </Link>
    </div>
  )
}
