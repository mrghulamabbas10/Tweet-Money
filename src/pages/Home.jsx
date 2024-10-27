import React from "react"
import Links from "../components/Links"
// import HelpSection from "../components/Help"
import OurFeatures from "../components/OurFeatures"
// import Research from "../components/Research"
import TokenMetrics from "../components/TokenMetrics"
import Details from "../components/details"
import SocialSection from "../components/Social"
import OurPlan from "../components/OurPlan"
import JoinSection from "../components/Join"

export default function Home() {
  return (
    <>
      <Links />
      {/* <HelpSection /> */}
      <OurFeatures />
      {/* <Research /> */}
      <TokenMetrics />
      <Details />
      <SocialSection />
      <OurPlan />
      <JoinSection />
    </>
  )
}
