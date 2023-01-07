import React from "react"
import Image from "next/image"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import Avatar from "../public/assets/tushar.png"

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-start max-w-6xl border-gray-200 mx-auto py-8 sm:pt-[10%] lg:pt-[15%] relative"
    >
      <p className="text-lg md:text-2xl text-gray-500 pl-3 md:pl-3  pb-6 md:pb-8">
        Hey!👋
      </p>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-start gap-6 px-2  sm:px-2">
        <div className="flex flex-col item-start">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight mb-1 text-black font-serif">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Tushar Rajput
          </h1>
          <h2 className="text-gray-600 text-sm sm:text-md lg:text-xl mb-4 lg:mb-8 tracking-wider">
            Frontend Developer{" "}
          </h2>
          <p className="text-gray-500 lg:text-xl mb-2 sm:w-[93%]">
            I use JavaScript to focus on Front-end with{" "}
            <span className="font-semibold">React/NextJs</span>. To build fast
            and responsive web.
          </p>
          {/* <p className="text-gray-600">To build fast and responsive web.</p> */}
        </div>
        <div className="w-[85px] sm:w-[176px] md:w-[250px] relative  sm:mb-0 mr-auto">
          <Image
            src={Avatar}
            alt="/"
            width="150"
            height="150"
            sizes="30vw"
            className="rounded-full "
          />
        </div>
      </div>
      <div className="p-1 mt-2 md:pt-4">
        <button className="p-2 text-sm md:text-md md:p-3">Get in Touch</button>
      </div>
      <div className="flex items-center justify-start max-w-[330px] sm:m-auto py-2 mt-2 lg:mt-14 md:pt-6 ">
        <div className="my-2 rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-blue-700">
          <FaLinkedinIn />
        </div>
        <div className="my-2 rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-blue-700">
          <FaGithub />
        </div>
        <div className="my-2 rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-blue-700">
          <AiOutlineTwitter />
        </div>
      </div>
    </div>
  )
}

export default Hero
