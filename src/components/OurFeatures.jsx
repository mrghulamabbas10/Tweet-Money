import React from "react"
import { Link } from "react-router-dom"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const data = [
  {
    title: "Tweeting",
    dis: "Buy or Sell any token in a single tweet, let everyone know.",
    linkname: "Start Trading on X",
    linkPath: "",
    imagePath: "/images/feature (6).webp",
  },
  {
    title: "Trade in DM",
    dis: "Snipe and or trade any token directly from X DMs.",
    linkname: "Join Queue",
    linkPath: "",
    imagePath: "/images/feature (1).webp",
  },
  {
    title: "Transferring money to any  𝕏  handle, & tipping.",
    dis: "",
    linkname: "Join Queue",
    linkPath: "",
    imagePath: "/images/feature (2).webp",
  },
  {
    title: "Funding your $tweet acc with fiat in the dapp",
    dis: "",
    linkname: "Start Trading on X",
    linkPath: "",
    imagePath: "/images/feature (3).webp",
  },
  {
    title: "Tweet to burn",
    dis: "There will be multiple tweet to burn incidents throughout the life of the project. ",
    linkname: "Start Trading on X",
    linkPath: "",
    imagePath: "/images/feature (4).webp",
  },
  {
    title: "Tweet to burn",
    dis: "There will be multiple tweet to burn incidents throughout the life of the project. ",
    linkname: "Start Trading on X",
    linkPath: "",
    imagePath: "/images/feature (7).png",
  },
  {
    title: "Follow the money",
    dis: "Snipe and or trade any token directly from X DMs.",
    linkname: "Join Queue",
    linkPath: "",
    imagePath: "/images/feature (8).png",
  },
  {
    title: "",
    dis: "",
    linkname: "SOON..",
    linkPath: "",
    imagePath: "",
  },
]

export default function OurFeatures() {
  return (
    <div className="px-[8vw] mt-[5vw]">
      <div className="text-center">
        <div className="flex items-center gap-3 justify-center">
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
          <p>Our Features</p>
          <hr className="w-10 opacity-50 animate__fadeInUp wow animate__animated" />
        </div>
        <h1 className="text-[4vw] font-semibold animate__fadeInUp wow animate__animated capitalize">
          Our Journey and Mission
        </h1>
        <p className="animate__fadeInUp wow animate__animated">
          Explore Our Inspirational Journey, Values, and Commitment to Providing
          <br />
          Exceptional SaaS Solutions That Empower Your Business
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="border border-[#17285a] md:p-[2vw] p-[5vw] md:rounded-3xl rounded-2xl ">
              <div className="shadow_1 border border-[#1C244C] md:p-[2vw] p-[5vw] space-y-[1.5vw] md:rounded-3xl rounded-2xl h-full">
                <h3 className="md:text-[2vw] text-[5vw] font-light animate__fadeInUp wow animate__animated">
                  {data.title}
                </h3>
                <p className="md:text-[1.5vw] text-[2.5vw]">{data.dis}</p>
                <Link
                  to={data.linkPath}
                  className="animate__fadeInUp wow animate__animated block text-nowrap text-center md:px-[3vw] px-[4vw] max-w-fit rounded-full md:py-[1vw] py-[1.5vw] hover:bg-white transition  ease-in-out duration-300 hover:text-black bg-[#02070D] border border-[#0073FF] text-white"
                >
                  {data.linkname}
                </Link>
                <div className="relative">
                  <div className="before:w-[25vw] before:top-[5vw] before:left-[3vw] before:h-[25vw] before:bg-opacity-20 before:-z-1 before:absolute before:rounded-full before:blur-3xl before:bg-[#1C6FFA] before:block">
                    <img
                      src={data.imagePath}
                      alt={data.title}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
