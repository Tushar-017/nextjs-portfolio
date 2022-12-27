import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"

const Floats = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-start max-w-[330px] sm:m-auto py-6 absolute bottom-2">
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

export default Floats
