import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "../components/Hero"

export default function LayoutMain({ children }) {
  return (
    <div className="bg-[#05071A] text-white">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      {children}
      <Footer />
    </div>
  )
}
